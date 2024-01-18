import React from 'react';
import './All.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><i className="bi bi-house">&nbsp;</i>Home</a>
            <a href="/posts"><i className="bi bi-chat">&nbsp;</i>Greetings</a>
        </nav>
    );
};

export default Navbar;