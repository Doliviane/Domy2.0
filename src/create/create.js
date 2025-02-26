import React from 'react';
import './create.css';
import { Link } from 'react-router-dom';
import Sidebar from '../navbar/menubar';
import ImageUpload from "../upload/imageupload";

function Create() {
  return (
    <div className="wrapper">
           <Sidebar/>
         <h1> Page de creation</h1>
        
       
         <Link to="/imageupload">Upload</Link>
        </div>
  );
}

export default Create;