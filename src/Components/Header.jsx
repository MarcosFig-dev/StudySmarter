import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav id="navbar">
      <p id="navTitle">StudySmart</p>
      <ul>
        <li className="nav-btn"><Link to="/login">Login</Link></li>
        <li className="nav-btn"><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
