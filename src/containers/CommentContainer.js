import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../utilities'
import { authorizeUser } from '../actions/userActions'
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
          {this.state.loggedIn ? <CommentForm /> : <Redirect to="/login" />}
        </Route>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}), { authorizeUser })(CommentContainer)