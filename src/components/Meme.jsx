// import React, { useState } from 'react';
// import { useMemeContext } from '../context/ContextProvider';
// import { useMemes, useEditFields } from "../hooks"



// function Meme({ topText, bottomText, imgUrl, index }) {
//     const { memeListAPI: { deleteMeme, editMeme }, memeAPI: { getRandomMeme } } = useMemeContext()

//     const { edits, handleChange, toggleEdit, isEditing, setIsEditing, setEdits } = useEditFields({ topText, bottomText, imgUrl, index })






//     const removeMeme = () => {
//         console.log("delete push")
//         deleteMeme(index)
//         alert("You have successfully deleted the meme!")
//     }

//     const updateMeme = (e) => {
//         e.preventDefault()
//         console.log('update push')
//         setIsEditing(false)
//         editMeme(index, edits)
//     }



//     const getNewMeme = () => {
//         setEdits(prevEdits => {
//             return {
//                 ...prevEdits,
//                 imgUrl: getRandomMeme()
//             }
//         })
//     }


//     return (
//         <>

//             {!isEditing ?


//                 <div className="meme-container">
//                     <div className="prev-div" style={{ backgroundImage: `url(${imgUrl})` }}>
//                         <h1>{topText}</h1>
//                         <h1>{bottomText}</h1>
//                     </div>
//                     <div className="button-div">
//                         <button className = "form-buttons"onClick={() => setIsEditing(true)}>EDIT</button>
//                         <button className = "form-buttons"onClick={removeMeme}>DELETE</button>
//                     </div>
//                 </div>

//                 :
//                 <div className = "meme-container">
//                     <form className="prev-div" style={{ backgroundImage: `url(${edits.imgUrl}) ` }}>
//                         <input name="topText" value={edits.topText} onChange={handleChange} />
//                         <input name="bottomText" value={edits.bottomText} onChange={handleChange} />
//                     </form>
//                     <div className="button-div">
//                         <button onClick={updateMeme}>SAVE</button>
//                         <button onClick={toggleEdit}>CANCEL</button>
//                         <button onClick={getNewMeme}>Get Random Meme</button>
//                     </div>
//                 </div>}


//         </>
//     );
// }

// export default Meme;

import React, { useState } from 'react';
import { useMemeContext } from '../context/ContextProvider';
import { Box, Button, Typography, TextField } from '@mui/material';
import { useEditFields } from "../hooks";

function Meme({ topText, bottomText, imgUrl, index }) {
    const { memeListAPI: { deleteMeme, editMeme }, memeAPI: { getRandomMeme } } = useMemeContext();
    const { edits, handleChange, toggleEdit, isEditing, setIsEditing, setEdits } = useEditFields({ topText, bottomText, imgUrl, index });

    const removeMeme = () => {
        console.log("delete push");
        deleteMeme(index);
        alert("You have successfully deleted the meme!");
    };

    const updateMeme = (e) => {
        e.preventDefault();
        console.log('update push');
        setIsEditing(false);
        editMeme(index, edits);
    };

    const getNewMeme = () => {
        setEdits(prevEdits => ({
            ...prevEdits,
            imgUrl: getRandomMeme()
        }));
    };

    return (
        <>
            {!isEditing ? (
                <Box className="meme-container" sx={{ mb: 4 }}>
                    <Box
                        className="prev-div"
                        sx={{
                            backgroundImage: `url(${imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            color: '#fff',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                            marginBottom: 2,
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            padding: 2,
                            borderRadius: 2,
                            backgroundColor: '#f0f4f8' // Same as form's background color
                        }}
                    >
                        <Typography variant="h4" component="h1">{topText}</Typography>
                        <Typography variant="h4" component="h1">{bottomText}</Typography>
                    </Box>
                    <Box className="button-div" sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setIsEditing(true)}
                        >
                            EDIT
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={removeMeme}
                        >
                            DELETE
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box className="meme-container" sx={{ mb: 4 }}>
                    <Box
                        className="prev-div"
                        sx={{
                            backgroundImage: `url(${edits.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: "space-between",
                            color: '#fff',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                            marginBottom: 2,
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            padding: 2,
                            borderRadius: 2,
                            backgroundColor: '#f0f4f8'
                        }}
                    >
                        <TextField
                            name="topText"
                            value={edits.topText}
                            onChange={handleChange}
                            variant="outlined"
                            label="Top Text"
                            sx={{ backgroundColor: '#fff', mb: 2 }}
                        />
                        <TextField
                            name="bottomText"
                            value={edits.bottomText}
                            onChange={handleChange}
                            variant="outlined"
                            label="Bottom Text"
                            sx={{ backgroundColor: '#fff' }}
                        />
                    </Box>
                    <Box className="button-div" sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={updateMeme}
                        >
                            SAVE
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={toggleEdit}
                        >
                            CANCEL
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={getNewMeme}
                        >
                            Get Random Meme
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    );
}

export default Meme;
