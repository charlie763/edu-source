import React from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from './UserFormFields'

class UserLogin extends React.Component {
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
        <input type="submit" value="Login"/><br/>
        <span>Not a user? <Link to="/signup">Signup</Link></span>
      </form>
    )
  }
}

export default UserLogin