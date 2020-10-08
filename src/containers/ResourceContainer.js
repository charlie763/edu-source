import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'
import Resources from '../components/Resources'
import Resource from '../components/Resource'

class ResourceContainer extends React.Component {
  componentDidMount(){
    if (!this.props.loadStatus){
      this.props.fetchResources()
    }
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

        <Route exact path={`${this.props.match.path}`}>
          <Resources resources={this.props.resources} displayGrade={this.displayGrade}/>
        </Route> 
        <Switch>
          <Route exact path={`${this.props.match.path}/new`}>
            <ResourceForm addResource={this.props.addResource} displayGrade={this.displayGrade} />
          </Route> 
          <Route exact path={`${this.props.match.path}/:id`} render={props => 
          <Resource 
            resource={this.findResource(props.match.params.id)} 
            loadStatus={this.props.loadStatus} 
            displayGrade={this.displayGrade}
          />
        } />
        </Switch>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resources: state.resources.list,
  loadStatus: state.resources.loadStatus
})

export default connect(mapStateToProps, { addResource, fetchResources })(ResourceContainer)
