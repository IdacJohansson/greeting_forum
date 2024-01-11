import React from 'react';
import './All.css';

const ImageButton = ({ onClick, label, imageSrc }) => {
    return (
        <button className="image-button" onClick={onClick}>
            {imageSrc ? <img src={imageSrc} alt="icon" /> : label}
        </button>
    );
};

export default ImageButton;
