import React from 'react';
import './create.css';
import { Link } from 'react-router-dom';
import Sidebar from '../navbar/menubar';
import ImageUpload from "../upload/imageupload";
import Pic from './picture';

function Create() {
  return (
    <div className="wrapper">
           
         <h1> Page de creation</h1>
         <Link to="/picture"> click </Link>
        
         <div id='App-sidebar'> <Sidebar /></div>

         <Link to="/imageupload"> <ImageUpload/></Link>
         
        </div>
  );
}

export default Create;