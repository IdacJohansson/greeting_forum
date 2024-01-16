import React, {useRef, useState} from 'react';
import './All.css';
import imageIcon from "./imageIcon.png";

const ImageButton = ({ onFileChange }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        //onFileChange(file);
    };

    return (
        <div>
            <input type="file" ref={fileInputRef} onClick={handleFileChange} style={{display: 'none'}}/>
            <a href="#" className="image-button" onClick={() => fileInputRef.current.click()}>
                <img className="imageIcon" src={imageIcon} alt="icon"/>
            </a>
        </div>
    );
};

export default ImageButton;
