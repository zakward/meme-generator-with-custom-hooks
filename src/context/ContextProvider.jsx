import React, {useState,useContext} from 'react';
const Context = React.createContext()
import {useMemes, useMemesList} from "../hooks"




function ContextProvider({children}) {

const memeAPI = useMemes()
const memeListAPI = useMemesList()


console.log(memeAPI)
       
        
    return ( 
        <Context.Provider value ={{memeAPI, memeListAPI}}>
            {children}
        </Context.Provider>
     );
}


const useMemeContext = () => useContext(Context);

export {ContextProvider, Context, useMemeContext}