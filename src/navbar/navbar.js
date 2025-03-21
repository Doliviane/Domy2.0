// Navbar.js
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './navbar.css';  // pour ajouter du style
import LogIn from '../connect/connect';
import ImageUpload from "../upload/imageupload";
import Footer from '../navbar/footbar'
import Create from '../create/create'
import RegisterPage from '../connect/register'
import Pic from '../create/picture';
import { FaHome, FaUpload} from "react-icons/fa";
import { IoIosContacts ,IoIosCreate, IoIosLogIn} from "react-icons/io";
import Home from '../HomePage/Home';

function Navbar() {
  return (
    <BrowserRouter className="layout">
        
    <nav className="navbar">
      <h1 className='logo'> DoMyWish </h1>
      <ul>

        <li><Link to="/Home"><FaHome />Accueil</Link></li>
        <li><Link to="/create"> <IoIosCreate />creer votre souhait</Link></li>
        <li><Link to="/imageupload">  <FaUpload />Upload</Link></li>
        <li><Link to="/contact"> <IoIosContacts />About us</Link></li>
        <li><Link to="/connect"> <IoIosLogIn />Log in</Link></li>
        <li>  <Link to="/picture"> click </Link></li>
      </ul>
    </nav>


      <div className="App">
      {/* Afficher la navbar */}
       
  <Routes>
  
        <Route path="/Home" element={/*<h2>Bienvenue sur la page
    </h2>*/ <Home /> } />
         <Route path="/create" element={<Create />} />
         <Route path="/create/picture" element={<Pic />} />
         <Route path="/imageupload" element={<ImageUpload/>} />
         <Route path="/footbar" element={<h2>Contact</h2>} />
         <Route path="/connect" element={<LogIn />} />
         <Route path="/connect/register" element={<RegisterPage />} />

         
       </Routes>
 

       
        

        <div className="content">
        
         
        </div>
      </div>
      
      
     
</BrowserRouter > 
   
  );
}

export default Navbar;
