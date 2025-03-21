
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import LogIn from './connect/connect';
import ImageUpload from "./upload/imageupload";
import Footer from './navbar/footbar'
import Create from './create/create'
import Container from './container/Container';
import RegisterPage from "./connect/register";
import Pic from "./create/picture";

 function App() {
  return (
<div className='App'>
  {/* Afficher la navbar */}
  <div id='App-nav'> <Navbar /></div>
  <div id='App-Container'><Container/></div>
  <div id='App-footer'><Footer /></div>
 




</div>
        
   
    );
    
}



export default App;
