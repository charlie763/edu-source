import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/login">Login</NavLink><br />
      <NavLink to="/signup">Sign Up</NavLink><br />
      <NavLink to="/resources">Resources</NavLink><br />
      <NavLink to="/bookshelves">Book Shelves</NavLink><br />
    </div>
  )
}

export default NavBar