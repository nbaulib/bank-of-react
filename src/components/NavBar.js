import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // optional, for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/credits">Credits</Link></li>
        <li><Link to="/debits">Debits</Link></li>
        <li><Link to="/userProfile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;