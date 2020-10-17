import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import { fetchPlaylists, addResourceToPlaylist, removeResourceFromPlaylist, addPlaylist } from '../actions/playlistActions'
import { authorizeUser, loginUser } from '../actions/userActions'
import { isResourceInPlaylist } from '../utilities'
import ResourceForm from '../components/ResourceForm'
import Resources from '../components/Resources'
import Resource from '../components/Resource'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistContext from '../components/PlaylistContext'
import ModalWrapper from '../components/ModalWrapper'
import UserContainer from './UserContainer'

class ResourceContainer extends React.Component {
  componentDidMount(){
    if (!this.props.loadStatus){
      this.props.fetchResources()
    }
    this.props.fetchPlaylists()
    this.props.authorizeUser()
  }

  findResource = id => {
    return this.props.resources.find(resource => resource.id == id)
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}/new`}>
            <>
              <ModalWrapper title="Add Resource" id="add-resource-form" previousUrl={this.props.match.url}>
                <ResourceForm 
                  addResource={this.props.addResource} 
                  resources={this.props.resources} 
                />
              </ModalWrapper>
              <PlaylistContext context="resources"/>
            </>
          </Route> 
          <Route path={[`${this.props.match.path}/playlists/new`, `${this.props.match.path}/:id/playlists/new`]} render={props => { 
            if (this.props.user.valid){
              return (
                <>
                  <ModalWrapper title="Add Resource To Playlist" id="playlist-select-form" previousUrl={this.props.match.url}>
                    <PlaylistForm 
                      {...props} 
                      fetchPlaylists={this.props.fetchPlaylists}
                      addResourceToPlaylist={this.props.addResourceToPlaylist}
                      addPlaylist={this.props.addPlaylist}
                      playlists={this.props.playlists}
                      playlistAdded={this.props.playlistAdded}
                      findResource={this.findResource}
                    />
                  </ModalWrapper>
                  <PlaylistContext 
                    context={this.props.location.context}
                    resourceId={this.props.location.state ? this.props.location.state.resourceId : null}
                  />
                </>
              )
            } else {
              const url = props.match.url
              return (
                <>
                  <ModalWrapper title="Login" id="login-form" previousUrl={url.slice(0,url.indexOf("/playlists"))}>
                    <UserContainer />
                  </ModalWrapper>
                  <PlaylistContext 
                    context={this.props.location.context}
                    resourceId={this.props.location.state ? this.props.location.state.resourceId : null}
                  />
                </>
              )
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Resource
              {...props} 
              resource={this.findResource(props.match.params.id)} 
              loadStatus={this.props.loadStatus} 
            />
          } />
          <Route path={`${this.props.match.path}`}>
            <Resources 
              resources={this.props.resources}
              isResourceInPlaylist={resourceId => isResourceInPlaylist.call(this, resourceId)}
              removeResourceFromPlaylist={this.props.removeResourceFromPlaylist} 
            />
          </Route> 
        </Switch>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  resources: state.resources.list,
  loadStatus: state.resources.loadStatus,
  playlists: state.playlists.list,
  playlistAdded: state.playlists.playlistAdded
})

const mapDispatchToProps = {
  addResource, 
  fetchResources, 
  fetchPlaylists,
  addResourceToPlaylist,
  removeResourceFromPlaylist,
  addPlaylist,
  loginUser, 
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer)
