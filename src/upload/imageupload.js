import React from 'react'
import {useState} from "react";
import { BiImageAdd } from "react-icons/bi";
import "./imageupload.css"; 
import  '../create/picture.css';


function ImageUpload() {
    // État pour stocker plusieurs fichiers (images)
    const [files, setFiles] = useState([]);

    // Fonction de gestion de l'upload
    function handleFiles(e) {
        const selectedFiles = e.target.files;
        // On transforme les fichiers sélectionnés en tableau et on les ajoute à l'état
        setFiles(prevFiles => [...prevFiles, ...Array.from(selectedFiles)]);
    }

    // Fonction pour afficher un aperçu des fichiers
    function renderFiles() {
        return files.map((file, index) => (
            <div key={index}>
                <p>{file.name}</p>
                {file.type.startsWith("image") && (
                    <div className="item">
                        <img src={URL.createObjectURL(file)} alt={file.name} />
                    </div>
                )}
                {/* Si tu veux aussi supporter les vidéos, tu peux les ajouter ici */}
                {file.type.startsWith("video") && <video src={URL.createObjectURL(file)} controls width="200" />}
            </div>
        ));
    }

    return (
        <div>
            <div className="icon">
                <BiImageAdd />
            </div>

            <input 
                className="box"
                type="file"
                multiple
                onChange={handleFiles}
                accept="image/*,video/*" // Permet uniquement les fichiers image et vidéo
            />
            <button type="submit">Add Files</button>

            <div className="banner">
                <div className="slider" style={{ "--quantity": files.length }}>
                    {files.map((file, index) => ( 
                        file.type.startsWith("image") && (
                            <div className="item" style={{ "--position": index + 1 }} key={index}>
                                <img src={URL.createObjectURL(file)} alt={file.name} />
                            </div>
                   ) ))}
                </div>
            </div>
           
       
        </div>
    );
}

export default ImageUpload;
