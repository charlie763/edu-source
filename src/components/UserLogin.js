import React from 'react'
import { Link } from 'react-router-dom'
import { handleInputChange } from '../utilities'
import UserFormFields from './UserFormFields'

class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
        <input type="submit" value="Login"/><br/>
        <span>Not a user? <Link to="/signup">Signup</Link></span>
      </form>
    )
  }
}

export default UserLogin