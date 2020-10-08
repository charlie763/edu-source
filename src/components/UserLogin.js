import React from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from './UserFormFields'

const UserLogin = props => {
  return(
    <form>
      <UserFormFields />
      <input type="submit" value="Login"/><br/>
      <span>Not a user? <Link to="/signup">Signup</Link></span>
    </form>
  )
}

export default UserLogin