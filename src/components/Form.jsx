// import React, {useState,useContext, useEffect } from 'react';
// import { useMemeContext } from '../context/ContextProvider';


// function Form() {

//     const { memeAPI: {memes, setMemeData, getRandomMeme}, memeListAPI: {saveMeme, memeList} } = useMemeContext()

//     const [inputs, setInputs] = useState({
//         topText: "",
//         bottomText: "",
//         imgUrl: "https://i.imgflip.com/24y43o.jpg"
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setInputs(prevInputs => {
//             return {
//                 ...prevInputs,
//                 [name]: value
//             }
//         })
//     }

//     const randomMeme = (e) => {
//         e.preventDefault()
//         setInputs(prevInputs => {
//             return {
//                 ...prevInputs,
//                 imgUrl: getRandomMeme()
//             }
//         })
//     }

//     const addMeme = (e) => {
//         e.preventDefault()
//         saveMeme(inputs)
//         alert('You have successfully added a new Meme to your Saved Memes')
//     }


  


//     useEffect(() => {
//         setMemeData()
//     }, []);
//     return (
//         <>
//             <form id = "add-form" onSubmit = {addMeme}>
//                 <input placeholder='top text' name = "topText" value ={inputs.topText} onChange = {handleChange} className = "input"/>
//                 <input placeholder='bottom text' name = "bottomText" value ={inputs.bottomText} onChange = {handleChange} className = "input"/>
//                 <button onClick = {randomMeme} className = "form-buttons">Get New Meme</button>
//                 <button className = "form-buttons">Save Meme</button>
//             </form>
//             <div className = "prev-div" style = {{backgroundImage : `url(${inputs.imgUrl})`}}>
//                 <h1>{inputs.topText}</h1>
//                 <h1>{inputs.bottomText}</h1>
//             </div>

//         </>
//     );
// }

// export default Form;

import React, { useState, useEffect } from 'react';
import { useMemeContext } from '../context/ContextProvider';
import {useNavigate} from "react-router-dom"
import { Box, TextField, Button, Typography } from '@mui/material';

function Form() {
    const { memeAPI: { setMemeData, getRandomMeme }, memeListAPI: { saveMeme } } = useMemeContext();

    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/24y43o.jpg"
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const randomMeme = (e) => {
        e.preventDefault();
        setInputs(prevInputs => ({
            ...prevInputs,
            imgUrl: getRandomMeme()
        }));
    };

    const addMeme = (e) => {
        e.preventDefault();
        saveMeme(inputs);
        alert('You have successfully added a new Meme to your Saved Memes');
        navigate("/savedMemes")
    };

    useEffect(() => {
        setMemeData();
    }, []);

    return (
        <>
            <Box 
                component="form" 
                id="add-form" 
                onSubmit={addMeme}
                sx={{
                    gap: 2,
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto'
                }}
            >
                <TextField
                    label="Top Text"
                    variant="outlined"
                    name="topText"
                    value={inputs.topText}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Bottom Text"
                    variant="outlined"
                    name="bottomText"
                    value={inputs.bottomText}
                    onChange={handleChange}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={randomMeme}
                >
                    Get New Meme
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Save Meme
                </Button>
            </Box>
            <Box
                className="prev-div"
                sx={{
                    backgroundImage: `url(${inputs.imgUrl})`,
                    backgroundPosition: 'center',
                    flexDirection: 'column',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
            >
                <Typography variant="h4" component="h1">{inputs.topText}</Typography>
                <Typography variant="h4" component="h1">{inputs.bottomText}</Typography>
            </Box>
        </>
    );
}

export default Form;
