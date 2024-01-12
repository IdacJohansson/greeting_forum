import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "./Button";


function Page2(props) {
    const { text, selectedImage } = props.location.state || {};
    const history = useHistory();
    const home = () => {
        history.push("/");
    };

    const handleButtonClick = () => {
        // Redirect to Page2 with text and selectedImage data
        history.push({
            pathname: '/post',
            state: { text, selectedImage },
        });
    };

    return (
        <div className="secondPage">
            <h1>Andra sidan</h1>
            <p>Din post: {text}</p>
            {selectedImage && <img src={selectedImage} alt="Selected" />}
            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}
export default Page2;