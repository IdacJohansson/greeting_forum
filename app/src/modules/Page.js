import React, { useState } from 'react';
import Text from "./Text";
import Button from './Button';
import ImageButton from "./ImageButton";
import "./All.css"

const Page = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleButtonClick = () => {
        // Skicka vidare till sida 2
        console.log('Input:', text);
    };

    const handleImage = () => {
        // Handle the new button click logic for pasting images here
        console.log('Paste images logic');
    };

    return (
        <div className="firstPage">
            <h1>Första sidan</h1>
            <Text value={text} onChange={handleTextChange} />
            <br/>
            <ImageButton onClick={handleImage} imageSrc="greeting_forum\app\public\imageIcon.png" />
            <Button onClick={handleButtonClick} text="Post" />
        </div>
    );
};

export default Page;
