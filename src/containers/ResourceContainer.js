import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { addResource } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'

class ResourceContainer extends React.Component {
  render(){
    return(
      <div>
        <Link to={`${this.props.match.url}`}>all</Link><br />
        <Link to={`${this.props.match.url}/new`}>Add Resource</Link>

        <Route path={`${this.props.match.path}`}>
          <h1>all resources</h1>
        </Route> 
        <Route exact path={`${this.props.match.path}/new`}>
          <ResourceForm addResource={this.props.addResource} />
        </Route> 
      </div>
    )
  }
}

export default connect(null, { addResource })(ResourceContainer)
