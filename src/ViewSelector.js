import React, { useState } from 'react';


function ViewSelector({options, setOptions}) {

 
  return (<div>
            <select
            value={options} // ...force the select's value to match the state variable...
            onChange={e => setOptions(e.target.value)}> // ... and update the state variable on any change!
             <option value="Gallery">Gallery</option>
              <option value="List">List</option>
              <option value="Single">Single</option>
            </select>

            {/* <button onClick={() => myFunction()} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">Gallery</a>
              <a href="#">Individual</a>
              <a href="#">List</a>
            </div> */}
          </div>);



}

export default ViewSelector; 