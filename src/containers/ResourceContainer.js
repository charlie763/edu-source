import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import { fetchPlaylists, addResourceToPlaylist, addPlaylist } from '../actions/playlistActions'
import { authorizeUser } from '../actions/userActions'
import { displayGrade } from '../utilities'
import ResourceForm from '../components/ResourceForm'
import Resources from '../components/Resources'
import Resource from '../components/Resource'
import PlaylistForm from '../components/PlaylistForm'

class ResourceContainer extends React.Component {
  componentDidMount(){
    if (!this.props.loadStatus){
      this.props.fetchResources()
    }
    this.props.authorizeUser()
  }

  findResource = id => {
    return this.props.resources.find(resource => resource.id == id)
  }

  render(){
    return(
      <div>
        <Link to={`${this.props.match.url}/new`}>Add Resource</Link>
        <Switch>
          <Route exact path={`${this.props.match.path}/new`}>
            <ResourceForm 
              addResource={this.props.addResource} 
              displayGrade={displayGrade}
              resources={this.props.resources} 
            />
          </Route> 
          <Route path={[`${this.props.match.path}/playlists/new`, `${this.props.match.path}/:id/playlists/new`]} render={props => { 
            if (this.props.user.valid){
              return (
                <PlaylistForm 
                  {...props} 
                  displayGrade={displayGrade}
                  resources={this.props.resources}
                  fetchPlaylists={this.props.fetchPlaylists}
                  addResourceToPlaylist={this.props.addResourceToPlaylist}
                  addPlaylist={this.props.addPlaylist}
                  playlists={this.props.playlists}
                  playlistAdded={this.props.playlistAdded}
                  findResource={this.findResource} 
                  loadStatus={this.props.loadStatus}  
                />
              )
            } else {
              return <Redirect to={{
                      pathname: "/login",
                      context: "resources"
                    }}/>
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Resource
              {...props} 
              resource={this.findResource(props.match.params.id)} 
              loadStatus={this.props.loadStatus} 
              displayGrade={displayGrade}
            />
          } />
          <Route path={`${this.props.match.path}`}>
            <Resources resources={this.props.resources} displayGrade={displayGrade}/>
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
  addPlaylist, 
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer)
