import React from 'react';


function ViewSelector({options, setOptions}) 
{

return (           
          <select            
            value={options} 
            onChange={(e) => setOptions(e.target.value)}>
              <option value="Single">Single</option>
              <option value="Gallery">Gallery</option>
              <option value="List">List</option>
              
            </select>
            )
} 

export default ViewSelector;
