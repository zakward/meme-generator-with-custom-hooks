import React, {useState,useContext, useEffect } from 'react';
import { useMemeContext } from '../context/ContextProvider';


function Form() {

    const { memeAPI: {memes, setMemeData, getRandomMeme}, memeListAPI: {saveMeme, memeList} } = useMemeContext()

    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/24y43o.jpg"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name]: value
            }
        })
    }

    const randomMeme = (e) => {
        e.preventDefault()
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                imgUrl: getRandomMeme()
            }
        })
    }

    const addMeme = (e) => {
        e.preventDefault()
        saveMeme(inputs)
        alert('You have successfully added a new Meme to your Saved Memes')
    }


  


    useEffect(() => {
        setMemeData()
    }, []);
    return (
        <>
            <form id = "add-form" onSubmit = {addMeme}>
                <input placeholder='top text' name = "topText" value ={inputs.topText} onChange = {handleChange} className = "input"/>
                <input placeholder='bottom text' name = "bottomText" value ={inputs.bottomText} onChange = {handleChange} className = "input"/>
                <button onClick = {randomMeme} className = "form-buttons">Get New Meme</button>
                <button className = "form-buttons">Save Meme</button>
            </form>
            <div className = "prev-div" style = {{backgroundImage : `url(${inputs.imgUrl})`}}>
                <h1>{inputs.topText}</h1>
                <h1>{inputs.bottomText}</h1>
            </div>

        </>
    );
}

export default Form;