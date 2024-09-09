// import React from 'react';
// import { Link, useNavigate } from "react-router-dom"


// function Navbar() {
//     const navigate = useNavigate()
//     return (
//         <>
//             <nav>
//                 <button className = "nav-buttons"onClick = {() => navigate("/")}>Create a Meme</button>
//                 <h3>Meme Generator 2.0</h3>
//                 <button className = "nav-buttons"onClick = {()=> navigate('/savedMemes')}>Saved Memes</button>
//             </nav>
//         </>
//     );
// }

// export default Navbar;

import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => navigate("/")}
                >
                    Create a Meme
                </Button>

                <Typography variant="h6" component="div">
                    Meme Generator 2.0
                </Typography>

                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => navigate('/savedMemes')}
                >
                    Saved Memes
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
