import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import { fetchPlaylists } from '../actions/playlistActions'
import { authorizeUser } from '../actions/userActions'
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

  displayGrade(grade){
    return grade === "0" ? "k" : grade
  }

  findResource(id){
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
              displayGrade={this.displayGrade}
              resources={this.props.resources} 
            />
          </Route> 
          <Route exact path={`${this.props.match.path}/playlists/new`} render={props => { 
            if (this.props.user.valid){
              return (
                <PlaylistForm 
                  {...props} 
                  displayGrade={this.displayGrade}
                  resources={this.props.resources}
                  fetchPlaylists={this.props.fetchPlaylists}
                  playlists={this.props.playlists} 
                />
              )
            } else {
              return <Redirect to="/login" />
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Resource
              {...props} 
              resource={this.findResource(props.match.params.id)} 
              loadStatus={this.props.loadStatus} 
              displayGrade={this.displayGrade}
            />
          } />
          <Route path={`${this.props.match.path}`}>
            <Resources resources={this.props.resources} displayGrade={this.displayGrade}/>
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
  playlists: state.playlists.list
})

export default connect(mapStateToProps, { addResource, fetchResources, fetchPlaylists, authorizeUser })(ResourceContainer)
