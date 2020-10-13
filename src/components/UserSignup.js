import React from 'react'
import { Link } from 'react-router-dom'
import { handleInputChange } from '../utilities'
import UserFormFields from './UserFormFields'

class UserSignup extends React.Component {
  state = {
    username: "",
    password: ""
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.createUser(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
        <input type="submit" value="Signup"/><br/>
        <span>Already a user? <Link to="/login">Login</Link></span>
      </form>
    )
  }
}

export default UserSignup