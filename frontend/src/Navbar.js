import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">File Transfer</div>
      <div className="nav-links">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
