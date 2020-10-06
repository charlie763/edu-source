import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { addResource } from '../actions/resourceActions'
import ResourceForm from '../components/ResourceForm'

class ResourceContainer extends React.Component {
  render(){
    return(
      <div>
        <Router> 
          <Route exact path="/resources/new" render={() => <ResourceForm addResource={this.props.addResource} />} />
        </Router>
        <p>All Resources/Search</p>
      </div>
    )
  }
}

export default connect(null, { addResource })(ResourceContainer)