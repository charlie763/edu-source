import React from 'react'
import { Link } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'
import PlaylistContext from './PlaylistContext'

class UserSignup extends React.Component {
  state = {
    username: "",
    password: ""
  }

  render(){
    return(
      <>
        <form onSubmit={e => handleSubmit.call(this, {
          e, 
          callback: this.props.createUser,
          currentState: this.state,
          clearState: {username: "", password: ""}
        })}>
          <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
          <input type="submit" value="Signup"/><br/>
          <span>Already a user? <Link to="/login">Login</Link></span>
        </form>
        <PlaylistContext 
          context={this.props.context}
          {...this.props.state}
        />
    </>
    )
  }
}

export default UserSignup