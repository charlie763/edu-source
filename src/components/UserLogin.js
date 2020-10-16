import React from 'react'
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
            <input className="btn btn-primary tertiary-background" type="submit" value="Login" data-dismiss="modal" aria-label="Close"/><br/>
            <br/>
            <span>Not a user? <a className="link" onClick={this.props.switchMode}>Signup</a></span>
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
          <input className="btn btn-primary tertiary-background" type="submit" value="Signup"/><br/>
          <br/>
          <span>Already a user? <a className="link" onClick={this.props.switchMode}>Login</a></span>
        </form>
      )
    }
    
  }
}

export default UserLogin