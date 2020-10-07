import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'
import Resources from '../components/Resources'

class ResourceContainer extends React.Component {
  componentDidMount(){
    this.props.fetchResources()
  }

  render(){
    return(
      <div>
        <Link to={`${this.props.match.url}/new`}>Add Resource</Link>

        <Route path={`${this.props.match.path}`}>
          <Resources resources={this.props.resources}/>
        </Route> 
        <Route exact path={`${this.props.match.path}/new`}>
          <ResourceForm addResource={this.props.addResource} />
        </Route> 
      </div>
    )
  }
}

export default connect(state => ({ resources: state.resources }), { addResource, fetchResources })(ResourceContainer)
