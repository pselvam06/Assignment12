import React from 'react'
import './Navbar.css'; 



function NavigationBar() {

  
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="logo"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-center">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TV Shows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Latest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My List</a>
        </li>
        <li className="nav-item">
          <form className="d-flex ms-3">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </li>
        <li className="nav-item ms-2">
          <button className="btn btn-danger btn-sm" type="button">Sign In</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavigationBar
