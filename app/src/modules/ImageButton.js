import React from 'react';
import './All.css';
import imageIcon from "./imageIcon.png";

const ImageButton = ({ onClick }) => {
    return (
        <button className="image-button" onClick={onClick}>
            <img className="imageIcon" src={imageIcon} alt="icon" />
        </button>
    );
};

export default ImageButton;
