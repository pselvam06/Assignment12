import React from 'react'
import './Navbar.css'; 



function NavigationBar() {

  
  return (
<nav className=" navbar navbar-expand-lg navbar-dark bg-dark sticky-top"> 
    <div className="container navbar-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" title="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home </a></li>
                <li className="nav-item"><a className="nav-link" href="#">TV Shows</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Latest</a></li>
                <li className="nav-item"><a className="nav-link" href="#">My List</a></li>
                 <li className="nav-item ms-2">
            <button type="button" className="btn btn-danger btn-sm">Sign In</button>
        </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavigationBar
