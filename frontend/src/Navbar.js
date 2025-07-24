import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Adjust the path as necessary

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


