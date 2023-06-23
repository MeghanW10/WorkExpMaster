import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import ViewSelector from './ViewSelector.js'
import List from './List.js'
import GalleryView from './GalleryView.js'
import DropDown from "./DropDown";

const options = []

function App() {

const [Options, setOptions] = useState(null); 
const currentOption = window.sessionStorage.getItem("Options");
  useEffect(() => {
    
    
    if (currentOption == null)
      window.sessionStorage.setItem("Options", "Single");
    else
      setOptions(currentOption)

  }, [currentOption]);

  function updateSetOptions (val) {
    window.sessionStorage.setItem("Options", val);
    setOptions(val);
  }

  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>  
        <ViewSelector options={Options} setOptions={updateSetOptions}/> 
        
        {Options === 'Single' ? <DataTable/>:  null}     
        {Options === 'List' ? <List/>:  null}
        {Options === 'Gallery' ? <GalleryView/>:  null}

      </header>
    </div>
  );
  }
export default App






