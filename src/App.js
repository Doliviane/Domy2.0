
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import LogIn from './connect/connect';

 function App() {
  return (
<BrowserRouter>
<div className="App">
        {/* Afficher la navbar */}
        <Navbar />

        <div className="content">
          <Routes>
         
            <Route path="/" element={<h2>Bienvenue sur la page</h2>} />
            <Route path="/about" element={<h2>À propos</h2>} />
            <Route path="/services" element={<h2>Services</h2>} />
            <Route path="/contact" element={<h2>Contact</h2>} />
            <Route path="/connect" element={<LogIn />} />
          </Routes>
        </div>
      </div>
    
</BrowserRouter> 
   
    );
    
}



export default App;
