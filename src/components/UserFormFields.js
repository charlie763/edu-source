import React from 'react'

const UserFormFields = ({ inheritedState, handleInputChange }) => {
  return(
    <>
      <label for="username">Username: </label>
      <input type="text" name="username" value={inheritedState.username} onChange={handleInputChange}/><br/>
      <label for="password">Password: </label>
      <input type="password" name="password" value={inheritedState.password} onChange={handleInputChange}/><br/>
    </>
  )
}

export default UserFormFields