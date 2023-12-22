import React, { useState } from 'react';
import { useMemeContext } from '../context/ContextProvider';
import { useMemes, useEditFields } from "../hooks"



function Meme({ topText, bottomText, imgUrl, index }) {
    const { memeListAPI: { deleteMeme, editMeme }, memeAPI: { getRandomMeme } } = useMemeContext()

    const { edits, handleChange, toggleEdit, isEditing, setIsEditing, setEdits } = useEditFields({ topText, bottomText, imgUrl, index })






    const removeMeme = () => {
        console.log("delete push")
        deleteMeme(index)
        alert("You have successfully deleted the meme!")
    }

    const updateMeme = (e) => {
        e.preventDefault()
        console.log('update push')
        setIsEditing(false)
        editMeme(index, edits)
    }



    const getNewMeme = () => {
        setEdits(prevEdits => {
            return {
                ...prevEdits,
                imgUrl: getRandomMeme()
            }
        })
    }


    return (
        <>

            {!isEditing ?


                <div className="meme-container">
                    <div className="prev-div" style={{ backgroundImage: `url(${imgUrl})` }}>
                        <h1>{topText}</h1>
                        <h1>{bottomText}</h1>
                    </div>
                    <div className="button-div">
                        <button className = "form-buttons"onClick={() => setIsEditing(true)}>EDIT</button>
                        <button className = "form-buttons"onClick={removeMeme}>DELETE</button>
                    </div>
                </div>

                :
                <div className = "meme-container">
                    <form className="prev-div" style={{ backgroundImage: `url(${edits.imgUrl}) ` }}>
                        <input name="topText" value={edits.topText} onChange={handleChange} />
                        <input name="bottomText" value={edits.bottomText} onChange={handleChange} />
                    </form>
                    <div className="button-div">
                        <button onClick={updateMeme}>SAVE</button>
                        <button onClick={toggleEdit}>CANCEL</button>
                        <button onClick={getNewMeme}>Get Random Meme</button>
                    </div>
                </div>}


        </>
    );
}

export default Meme;