import React, {useState} from 'react';
import {getMemes} from "./queries"


export const useMemes = () => {
    const [memes, setMemes] = useState([])

    const setMemeData = async () => {
        const memeData = await getMemes()
        setMemes(memeData)
    }

    const getRandomMeme =  () => {
        const randomNum = Math.floor(Math.random() * memes.length)
        const randomMemeUrl = memes[randomNum].url
        return randomMemeUrl
    }
    return {
        memes, setMemeData, getRandomMeme
    }

}

export const useMemesList = () => {
    const [memeList, setMemeList] = useState([])
    
    const saveMeme = (inputs) => {
        setMemeList(prevList => {
            return [
                ...prevList,
                inputs
            ]
        })
    }
    const deleteMeme = (position) => {
        setMemeList(prevList => prevList.filter((meme, index) => position !== index ))
    }
    const editMeme = (position, edits) => {
        setMemeList(prevList => prevList.map((meme, index) => position !== index ? meme : edits))
    }
    return {
        saveMeme, memeList, deleteMeme, editMeme
    }
}


export const useEditFields = (obj) => {

    const [edits, setEdits] = useState({
        topText: obj.topText,
        bottomText: obj.bottomText,
        imgUrl: obj.imgUrl
    })
    const [isEditing, setIsEditing] = useState(false)

    
    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdits(prevEdits => {
            return {
                ...prevEdits,
                [name]: value
            }
        })
    }
    return {
        edits, handleChange, toggleEdit, isEditing, setIsEditing, setEdits
    }
}