import React from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from './UserFormFields'

class UserSignup extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <UserFormFields inheritedState={this.state} handleInputChange={this.handleInputChange}/>
        <input type="submit" value="Signup"/><br/>
        <span>Already a user? <Link to="/login">Login</Link></span>
      </form>
    )
  }
}

export default UserSignup