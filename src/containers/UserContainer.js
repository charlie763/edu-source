import React from 'react'
import { connect } from 'react-redux'
import UserLogin from '../components/UserLogin'
import { createUser, loginUser, logoutUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

class UserContainer extends React.Component {
  state = {
    mode: "login"
  }

  switchMode = e => {
    e.preventDefault()
    if (this.state.mode === "login"){
      this.setState({mode: "signup"})
    } else if (this.state.mode === "signup"){
      this.setState({mode: "login"})
    }
  }

  render(){
    if (this.props.match.url === "/logout") {
      this.props.logoutUser()
      return <Redirect to="/" />
    } else {
      return(
        <UserLogin 
          loginUser={this.props.loginUser}
          createUser={this.props.createUser}
          user={this.props.user}
          mode={this.state.mode}
          switchMode={this.switchMode}
          url = {this.props.match ? this.props.match.url : null}
        />
      )
    }
  }
}

export default connect(state => ({user: state.user}), { createUser, loginUser , logoutUser })(UserContainer)