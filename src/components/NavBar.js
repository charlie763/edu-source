import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/resources">Resources</NavLink><br />
    </div>
  )
}

export default NavBar