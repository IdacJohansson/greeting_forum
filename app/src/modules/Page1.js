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

            const reader = new FileReader();
            reader.onloadend = () => console.log(reader.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleButtonClick = () => {
        history.push({
            pathname: '/preview',
            state: {alias, text, selectedFile: file },
        });
    };

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
