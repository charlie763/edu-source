import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { isResourceInPlaylist } from '../utilities'
import { fetchPlaylists, addPlaylist, removeResourceFromPlaylist } from '../actions/playlistActions'
import { authorizeUser } from '../actions/userActions'
import Playlists from '../components/playlists/Playlists'
import Playlist from '../components/playlists/playlist/Playlist'
import PlaylistAddForm from '../components/playlists/playlistAddForm/PlaylistAddForm'
import ModalWrapper from '../components/ModalWrapper'
import UserContainer from './UserContainer'

class PlaylistContainer extends React.Component{
  componentDidMount(){
    this.props.fetchPlaylists()
    this.props.authorizeUser()
  }

  findPlaylist = id => {
    return this.props.playlists.find(playlist => playlist.id === parseInt(id,10))
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/new`} render={props => {
            if (this.props.user.valid){ 
              return(
                <>
                  <ModalWrapper title="Add Playlist" id="playlist-add-form" previousUrl="/bookshelves">
                    <PlaylistAddForm
                      {...props}
                      addPlaylist={this.props.addPlaylist}
                      clearState={{name: ""}}
                      playlists={this.props.playlists}
                    />
                  </ModalWrapper>
                  <Playlists 
                      playlists={this.props.playlists}
                      user={this.props.user}
                      match={{path: "bookshelves"}}
                  />
                </>
              ) 
            } else {
              return (
                <>
                  <UserContainer previousUrl={this.props.match.url}/>
                  <Playlists 
                      playlists={this.props.playlists}
                      user={this.props.user}
                      match={{path: "bookshelves"}}
                  />
                </>
              )
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Playlist 
              {...props}
              playlist={this.findPlaylist(props.match.params.id)}
              loadStatus={this.props.loadStatus}
              removeResourceFromPlaylist={this.props.removeResourceFromPlaylist}
              isResourceInPlaylist={resourceId => isResourceInPlaylist.call(this, resourceId)}
            />          
          }/>
          <Route path={`${this.props.match.path}`} render={props => 
            <Playlists {...props} playlists={this.props.playlists} user={this.props.user}/>          
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  playlists: state.playlists.list,
  loadStatus: state.playlists.loadStatus
})

const mapDispatchToProps = { 
  fetchPlaylists,
  addPlaylist, 
  removeResourceFromPlaylist,
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer)