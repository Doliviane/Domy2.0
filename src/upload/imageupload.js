import React from 'react'
import {useState} from "react";
import { BiImageAdd } from "react-icons/bi";
import "./imageupload.css";

function ImageUpload(){
    // État pour stocker plusieurs fichiers (images et vidéos)
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
                {file.type.startsWith("image") && <img src={URL.createObjectURL(file)} alt={file.name} width="100" />}
                {file.type.startsWith("video") && <video src={URL.createObjectURL(file)} controls width="200" />}
            </div>
        ));
    }

    return (
        <div>
            <div className="icon"> <BiImageAdd  />
            </div>

            <input className="box"
                type="file"
                multiple
                onChange={handleFiles}
                accept="image/*,video/*" // Permet uniquement les fichiers image et vidéo
            />
            <button type="submit">Add Files</button>

            <div>
                {renderFiles()}
            </div>
        </div>
    );
}
export default ImageUpload ;