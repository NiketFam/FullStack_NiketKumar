import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">JobPortal</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;