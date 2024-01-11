import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function Page2() {
    const history = useHistory();
    const home = () => {
        history.push("/");
    };
    return (
        <div className="secondPage">
            <h1>Andra sidan</h1>
        </div>
    );
}

export default Page2;