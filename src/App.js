import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import ViewSelector from './ViewSelector.js'
import List from './List.js'
import GalleryView from './GalleryView.js'
import ToolTip from './GalleryView.js'
function App() {

  const [Options, setOptions] = useState('Single'); // Declare a state variable...
  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>  
        <ViewSelector options={Options} setOptions={setOptions}></ViewSelector> 
        {Options=='Single' ? <DataTable />  :  null}     
        {Options=='List' ? <List />:  null}
        {Options=='Gallery' ? <GalleryView/>:  null}
      
      </header>
      </div>


  )}export default App;