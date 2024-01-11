import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Text from "./Text";
import Button from './Button';
import ImageButton from "./ImageButton";
import "./All.css"

function Page1() {
    const history = useHistory();
    const [text, setText] = useState(''); // Initialize text state

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleButtonClick = () => {
        // Redirect to Page2 when "Post" button is clicked
        history.push('/preview');
    };

    const handleImage = () => {
        // Handle the new button click logic for pasting images here
        console.log('Paste images logic');
    };

    return (
        <div className="firstPage">
            <h1>Första sidan</h1>
            <Text value={text} onChange={handleTextChange}/>
            <br/>
            <ImageButton
                onClick={handleImage}
                imageSrc="greeting_forum/app/public/imageIcon.png"
            />
            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}

export default Page1;
