import React, { useState } from 'react';


function ViewSelector({options, setOptions}) 
{

return (<div>            
          <select
            value={options} // ...force the select's value to match the state variable...
            onChange={(e) => setOptions(e.target.value,)}> // ... and update the state variable on any change!
             <option value="Gallery">Gallery</option>
              <option value="List">List</option>
              <option value="Single">Single</option>
            </select>
            </div>)
   
}           
                          
  export default ViewSelector;
