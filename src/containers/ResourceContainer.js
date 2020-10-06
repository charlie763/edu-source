import React from 'react'
import { connect } from 'react-redux'
import { addResource } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'

class ResourceContainer extends React.Component {
  render(){
    return(
      <div>
        <ResourceForm addResource={this.props.addResource} />
        <p>All Resources/Search</p>
      </div>
    )
  }
}

export default connect(null, { addResource })(ResourceContainer)