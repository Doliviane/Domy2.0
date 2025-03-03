import React from 'react';
import './create.css';
import { Link } from 'react-router-dom';
import Sidebar from '../navbar/menubar';
import ImageUpload from "../upload/imageupload";
import Wish from './wish';

function Create() {
  return (
    <div className="wrapper">
           <Sidebar/>
         <h1> Page de creation</h1>
        
       
         <Link to="/imageupload">Upload</Link>
        <Link to="/wish">Wish</Link>
        </div>
  );
}

export default Create;