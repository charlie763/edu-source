import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../utilities'
import { authorizeUser } from '../actions/userActions'
import { addComment } from '../actions/commentActions'
import CommentForm from '../components/CommentForm'

class CommentContainer extends React.Component{
  state = {
    loggedIn: false
  }

  componentDidMount(){
    this.setState({
      loggedIn: isLoggedIn.call(this)
    })
  }

  render(){
    return(
      <div>
        <Route exact path={`${this.props.relativePath}/comments/new`}>
          {this.state.loggedIn ? 
            <CommentForm 
              resourceId={this.props.resourceId} 
              userId={this.props.user.id}
              addComment={this.props.addComment}
            /> : 
            <Redirect to="/login" />}
        </Route>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}), { authorizeUser, addComment })(CommentContainer)