import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import { createUser, loginUser } from '../actions/userActions'

class UserContainer extends React.Component {
  state = {
    mode: "login"
  }

  switchMode = () => {
    if (this.state.mode === "login"){
      this.setState({mode: "signup"})
    } else if (this.state.mode === "signup"){
      this.setState({mode: "login"})
    }
  }

  render(){
    return(
      <UserLogin 
        loginUser={this.props.loginUser}
        createUser={this.props.createUser}
        user={this.props.user}
        mode={this.state.mode}
        switchMode={this.switchMode}
      />
    )
  }
}

export default connect(state => ({user: state.user}), { createUser, loginUser })(UserContainer)