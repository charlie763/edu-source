import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'
import PlaylistContext from './PlaylistContext'

class UserSignup extends React.Component {
  state = {
    username: "",
    password: ""
  }

  render(){
    if (this.state.submitted){
      if (this.props.user.valid){
        switch(this.props.context){
          case "resource":
            return <Redirect to={{
                      pathname: `/resources/${this.props.state.resourceId}/playlists/new`,
                      context: this.props.context,
                      state: {...this.props.state}
                    }}/>
          case "resources":
            return <Redirect to={{
                      pathname: "/resources/playlists/new",
                      context: this.props.context,
                      state: {...this.props.state}
                    }}/>
          default:
            return <Redirect to={{
                      pathname: `${this.props.context}`,
                      context: this.props.context,
                      state: {...this.props.state}
                    }}/>
        }
      }
    } else {
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
}

export default UserSignup