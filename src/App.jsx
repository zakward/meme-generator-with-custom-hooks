import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom"
import { Context } from "./context/ContextProvider.jsx";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import SavedMemes from './components/SavedMemes.jsx';



function App() {


  return (
    <>
      <div id="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/savedMemes" element={<SavedMemes />} />
        </Routes>
      </div>

    </>
  );
}

export default App;