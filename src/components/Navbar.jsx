import React from 'react';
import { Link, useNavigate } from "react-router-dom"


function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <nav>
                <button className = "nav-buttons"onClick = {() => navigate("/")}>Create a Meme</button>
                <h3>Meme Generator 2.0</h3>
                <button className = "nav-buttons"onClick = {()=> navigate('/savedMemes')}>Saved Memes</button>
            </nav>
        </>
    );
}

export default Navbar;