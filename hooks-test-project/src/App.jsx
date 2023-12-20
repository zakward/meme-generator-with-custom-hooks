import React, {useContext} from 'react';
import { Context } from "./context/ContextProvider.jsx";
import Form from './components/Form.jsx';
import MemeList from './components/MemeList.jsx';


function App() {


  return (  
    <>
      <Form />
      <MemeList />
    </>
  );
}

export default App;