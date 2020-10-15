import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchPlaylists } from '../actions/playlistActions'
import Playlists from '../components/Playlists'
import Playlist from '../components/Playlist'
import PlaylistAddForm from '../components/PlaylistAddForm'

class PlaylistContainer extends React.Component{
  componentDidMount(){
    this.props.fetchPlaylists()
  }

  findPlaylist = id => {
    return this.props.playlists.find(playlist => playlist.id === parseInt(id,10))
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/new`} render={props => 
            <PlaylistAddForm />
          }/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Playlist 
              {...props}
              playlist={this.findPlaylist(props.match.params.id)}
              loadStatus={this.props.loadStatus}
            />          
          }/>
          <Route path={`${this.props.match.path}`} render={props => 
            <Playlists {...props} playlists={this.props.playlists}/>          
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists.list,
  loadStatus: state.playlists.loadStatus
})

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistContainer)