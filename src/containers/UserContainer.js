import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'

class UserContainer extends React.Component {
  render(){
    return(
      <Switch>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route exact path="/signup">
          <UserSignup />
        </Route>
      </Switch>
    )
  }
}

export default UserContainer