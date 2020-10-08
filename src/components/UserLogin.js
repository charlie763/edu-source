import React from 'react'
import UserFormFields from './UserFormFields'

const UserLogin = props => {
  return(
    <form>
      <UserFormFields />
      <input type="submit" value="Login"/>
    </form>
  )
}

export default UserLogin