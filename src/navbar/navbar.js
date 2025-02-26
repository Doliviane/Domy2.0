// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  // pour ajouter du style

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
         
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/create">creer votre souhait</Link></li>
        <li><Link to="/imageupload">Upload</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/connect" >Log in</Link></li>
      </ul>
    </nav>

    
  );
}

export default Navbar;
