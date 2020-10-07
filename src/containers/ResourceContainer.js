import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'
import Resources from '../components/Resources'
import Resource from '../components/Resource'

class ResourceContainer extends React.Component {
  componentDidMount(){
    this.props.fetchResources()
  }

  displayGrade(grade){
    return grade === "0" ? "k" : grade
  }

  render(){
    return(
      <div>
        <Link to={`${this.props.match.url}/new`}>Add Resource</Link>

        <Route exact path={`${this.props.match.path}`}>
          <Resources resources={this.props.resources} displayGrade={this.displayGrade}/>
        </Route> 
        <Route exact path={`${this.props.match.path}/:id`}>
          <Resource resource={this.props.match.params.id} displayGrade={this.displayGrade}/>
        </Route> 
        <Route exact path={`${this.props.match.path}/new`}>
          <ResourceForm addResource={this.props.addResource} displayGrade={this.displayGrade} />
        </Route> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resources: state.resources.list,
  loadStatus: state.resources.loadStatus
})

export default connect(mapStateToProps, { addResource, fetchResources })(ResourceContainer)
