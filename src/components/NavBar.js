import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light justify-content-between secondary-background">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/bookshelves">Book Shelves</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resources">Resources</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  )
}

export default NavBar