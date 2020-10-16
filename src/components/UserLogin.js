import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'

class UserLogin extends React.Component {
  state = {
    username: "",
    password: "",
    submitted: false
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      name: "",
      selectId: null,
      submitted: true
    })
  }
  
  render(){
    if (this.props.mode === "login"){
      return(
        <>
          <form onSubmit={this.handleLoginSubmit}>
            <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
            <input type="submit" value="Login" data-dismiss="modal" aria-label="Close"/><br/>
            <span>Not a user? <button onClick={this.props.switchMode}>Signup</button></span>
          </form>
        </>
      )
    } else if (this.props.mode === "signup"){
      return(
        <form onSubmit={e => handleSubmit.call(this, {
          e, 
          callback: this.props.createUser,
          currentState: this.state,
          clearState: {username: "", password: ""}
        })}>
          <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
          <input type="submit" value="Signup"/><br/>
          <span>Already a user? <button onClick={this.props.switchMode}>Login</button></span>
        </form>
      )
    }
    
  }
}

export default UserLogin