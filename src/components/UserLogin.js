import React from 'react'
import { Link } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'

class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  }
  
  render(){
    return(
      <form onSubmit={e => handleSubmit.call(this, {
        e, 
        callback: this.props.loginUser,
        currentState: this.state,
        clearState: {username: "", password: ""}
      })}>
        <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
        <input type="submit" value="Login"/><br/>
        <span>Not a user? <Link to="/signup">Signup</Link></span>
      </form>
    )
  }
}

export default UserLogin