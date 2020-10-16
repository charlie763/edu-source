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

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      name: "",
      selectId: null,
      submitted: true
    })
  }
  
  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
          <input type="submit" value="Login" data-dismiss="modal" aria-label="Close"/><br/>
          <span>
            Not a user? 
            <Link to={{
              pathname: "/signup",
              context: this.props.context,
              state: {...this.props.state} 
            }}>Signup</Link>
          </span>
        </form>
      </>
    )
    }
}

export default UserLogin