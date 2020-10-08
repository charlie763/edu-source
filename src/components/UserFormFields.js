import React from 'react'

class UserFormFields extends React.Component {
  render(){
    return(
      <>
        <label for="username">Username: </label>
        <input type="text" name="username"/><br/>
        <label for="password">Password: </label>
        <input type="password" name="password"/><br/>
      </>
    )
  }
}

export default UserFormFields