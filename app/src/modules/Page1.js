import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Text from "./Text";
import Button from './Button';
import ImageButton from "./ImageButton";
import "./All.css"

function Page1() {
    const history = useHistory();
    const [file, setFile] = useState()
    const [text, setText] = useState('');
    const [alias, setAlias] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleAliasChange = (e) => {
        setAlias(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);

            // You can read the content of the file using FileReader and convert it to base64
            const reader = new FileReader();
            reader.onloadend = () => {
                // Do something with the base64-encoded image data
                console.log(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleButtonClick = () => {
        // Redirect to Page2 with text and selectedImage data
        history.push({
            pathname: '/preview',
            state: {alias, text, selectedFile: file },
        });
    };



    //Add alias prompt!

    return (
        <div className="firstPage">
            <div className="createGreeting">
                <h2>Create a greeting</h2>
            </div>
            <br/>
            <input type="text" value={alias} onChange={handleAliasChange} placeholder="Enter alias" />
            <Text value={text} onChange={handleTextChange}/>
            <br/>
            <ImageButton/>
            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}

export default Page1;
