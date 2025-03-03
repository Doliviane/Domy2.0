// Navbar.js
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './navbar.css';  // pour ajouter du style
import LogIn from '../connect/connect';
import ImageUpload from "../upload/imageupload";
import Footer from '../navbar/footbar'
import Create from '../create/create'

function Navbar() {
  return (
    <BrowserRouter className="layout">
        
    <nav className="navbar">
      <ul>
     
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/create">creer votre souhait</Link></li>
        <li><Link to="/imageupload">Upload</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/connect" >Log in</Link></li>
      </ul>
    </nav>


<div className="App">
        {/* Afficher la navbar */}
        

        <div className="content">
          <Routes>
         
            <Route path="/" element={<h2>Bienvenue sur la page
            </h2>} />
            <Route path="/create" element={<Create />} />
            <Route path="/imageupload" element={<ImageUpload/>} />
            <Route path="/footbar" element={<h2>Contact</h2>} />
            <Route path="/connect" element={<LogIn />} />
          </Routes>
        </div>
      </div>
      
      
     
</BrowserRouter> 
   
  );
}

export default Navbar;
