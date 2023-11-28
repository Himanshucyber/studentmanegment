import React from 'react'
import { NavLink } from 'react-router-dom'
//step 1
export default function MainNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/table">Table</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/list">List</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/form">Form</NavLink>
      </li>
    </ul>
   
  </div>
</nav>
  )
}
