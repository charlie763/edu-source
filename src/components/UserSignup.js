import React from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from './UserFormFields'

const UserSignup = props => {
  return(
    <form>
      <UserFormFields />
      <input type="submit" value="Signup"/><br/>
      <span>Already a user? <Link to="/login">Login</Link></span>
    </form>
  )
}

export default UserSignup