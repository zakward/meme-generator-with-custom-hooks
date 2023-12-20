import React, {useState,useContext, useEffect } from 'react';
import { useMemeContext } from '../context/ContextProvider';


function Form() {

    const { memeAPI: {memes, setMemeData, getRandomMeme}, memeListAPI: {saveMeme, memeList} } = useMemeContext()

    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/30b1gx.jpg"
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
    }


  


    useEffect(() => {
        setMemeData()
    }, []);
    return (
        <>
            <form onSubmit = {addMeme}>
                <input placeholder='top text' name = "topText" value ={inputs.topText} onChange = {handleChange}/>
                <input placeholder='bottom text' name = "bottomText" value ={inputs.bottomText} onChange = {handleChange}/>
                <button onClick = {randomMeme}>Get New Meme</button>
                <button>Save Meme</button>
            </form>
            <div className = "prev-div" style = {{backgroundImage : `url(${inputs.imgUrl})`}}>
                <h1>{inputs.topText}</h1>
                <h1>{inputs.bottomText}</h1>
            </div>

        </>
    );
}

export default Form;