import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import { createUser, loginUser } from '../actions/userActions'

class UserContainer extends React.Component {
  render(){
    return(
      <Switch>
        <Route exact path="/login">
          <UserLogin 
            loginUser={this.props.loginUser}
            context={this.props.location.context}
            state={this.props.location.state}
            user={this.props.user}
          />
        </Route>
        <Route exact path="/signup">
          <UserSignup 
            createUser={this.props.createUser}
            context={this.props.location.context}
            state={this.props.location.state}
            user={this.props.user}
          />
        </Route>
      </Switch>
    )
  }
}

export default connect(state => ({user: state.user}), { createUser, loginUser })(UserContainer)