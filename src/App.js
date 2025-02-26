
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import LogIn from './connect/connect';
import ImageUpload from "./upload/imageupload";
import Footer from './navbar/footbar'
import Create from './create/create'
 function App() {
  return (
<BrowserRouter>
<div className="App">
        {/* Afficher la navbar */}
        <Navbar />

        <div className="content">
          <Routes>
         
            <Route path="/" element={<h2>Bienvenue sur la page
            </h2>} />
            <Route path="/create" element={<Create />} />
            <Route path="/imageupload" element={<ImageUpload/>} />
            <Route path="/contact" element={<h2>Contact</h2>} />
            <Route path="/connect" element={<LogIn />} />
          </Routes>
        </div>
      </div>
      
      <Footer />
</BrowserRouter> 
   
    );
    
}



export default App;
