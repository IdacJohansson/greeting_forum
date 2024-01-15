import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Text from "./Text";


function Page2(props) {
    const { text, selectedImage } = props.location.state || {};
    const history = useHistory();
    const [newText, setText] = useState(text || ''); // Initialize text state

    const home = () => {
        history.push("/");
    };

    const handleButtonClick = () => {
        // Redirect to Page2 with text and selectedImage data
        history.push({
            pathname: '/post',
            state: { newText, selectedImage },
        });
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="secondPage">
            <h1>Preview</h1>
            <h2>Want to edit your post?</h2>
            <Text value={newText} onChange={handleTextChange} />
            <Button
                onClick={handleButtonClick}
                text="Post"
            />
        </div>
    );
}
export default Page2;