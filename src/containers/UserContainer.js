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
          <UserLogin loginUser={this.props.loginUser}/>
        </Route>
        <Route exact path="/signup">
          <UserSignup createUser={this.props.createUser}/>
        </Route>
      </Switch>
    )
  }
}

export default connect(null, { createUser, loginUser })(UserContainer)