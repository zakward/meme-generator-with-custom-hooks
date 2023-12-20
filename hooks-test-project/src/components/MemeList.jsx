import React from 'react';
import { useMemeContext} from '../context/ContextProvider';
import Meme from './Meme';



function MemeList() {
    const {memeListAPI: {memeList}} = useMemeContext()

    const memeElements = memeList.map((meme, index) => {
        return <Meme {...meme} key = {index} index = {index}/>
    })
    return ( 
        <>
        {memeElements} 
        </>
     );
}

export default MemeList;