import React, {useState} from 'react';
import './All.css';
import imageIcon from "./imageIcon.png";

const ImageButton = ({ onFileChange }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        onFileChange(event);
    };

    return (
        <div>
            <button className="image-button" type="file" onClick={handleFileChange}>
                <img className="imageIcon" src={imageIcon} alt="icon"/>
            </button>
        </div>
    );
};

export default ImageButton;
