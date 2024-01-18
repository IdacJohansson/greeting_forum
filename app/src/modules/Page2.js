import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Text from "./Text";
import axios from 'axios';


function Page2(props) {
    const {alias, text, selectedImage} = props.location.state || {};
    const history = useHistory();
    const [newText, setText] = useState(text || '');


    const newGreeting = async () => {
        try {
            const response = await axios.post('http://localhost:8080/posts/add', {
                alias: alias,
                greeting: newText,
                date: new Date().toDateString(),
                picture: selectedImage,
            });
            console.log(response);
            greetingPage3();
        } catch (error) {
            console.log(error);
        }
    };



    const greetingPage3 = () => {
        history.push("/greetings");
    };

    const handleButtonClick = () => {
        newGreeting();
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="secondPage">
            <h1>Preview</h1>
            <h2>Want to edit your post?</h2>

            <div>
                <label>Will be posted by: {alias}</label>
            </div>


            <Text value={newText} onChange={handleTextChange}/>

            <div>
                <label>Image:</label>
                <img src={(selectedImage)} alt=" Cant show image"/>
            </div>

            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}

export default Page2;