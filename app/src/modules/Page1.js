import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Text from "./Text";
import Button from './Button';
import ImageButton from "./ImageButton";
import "./All.css"

function Page1() {
    const history = useHistory();
    const [text, setText] = useState(''); // Initialize text state
    const [selectedImage, setSelectedImage] = useState(null); // Initialize selectedImage state

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImage = (image) => {
        setSelectedImage(image);
    };

    const handleButtonClick = () => {
        // Redirect to Page2 with text and selectedImage data
        history.push({
            pathname: '/preview',
            state: { text, selectedImage },
        });
    };

    return (
        <div className="firstPage">
            <h1>Första sidan</h1>
            <Text value={text} onChange={handleTextChange}/>
            <br/>
            <ImageButton
                onClick={() => handleImage('')}
            />
            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}

export default Page1;
