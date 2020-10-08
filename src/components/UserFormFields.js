import React from 'react'

class UserFormFields extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <>
        <label for="username">Username: </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/><br/>
        <label for="password">Password: </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/><br/>
      </>
    )
  }
}

export default UserFormFields