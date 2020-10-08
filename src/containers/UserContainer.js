import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import { signupUser } from '../actions/userActions'

class UserContainer extends React.Component {
  render(){
    return(
      <Switch>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route exact path="/signup">
          <UserSignup signupUser={this.props.signupUser}/>
        </Route>
      </Switch>
    )
  }
}

export default connect(null, { signupUser })(UserContainer)