import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar cyan lighten-1'>
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Todo app</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className='navbar-login'><a href="sass.html">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
