import React from 'react'
import { Link } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'
import PlaylistContext from './PlaylistContext'

class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  }
  
  render(){
    return(
      <>
        <form onSubmit={e => handleSubmit.call(this, {
          e, 
          callback: this.props.loginUser,
          currentState: this.state,
          clearState: {username: "", password: ""}
        })}>
          <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
          <input type="submit" value="Login"/><br/>
          <span>
            Not a user? 
            <Link to={{
              pathname: "/signup",
              context: this.props.context,
              state: {...this.props.state} 
            }}>Signup</Link>
          </span>
        </form>
        <PlaylistContext 
          context={this.props.context}
          playlists={this.props.state.playlists}
        />
      </>
    )
  }
}

export default UserLogin