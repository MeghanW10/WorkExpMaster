import React from 'react';
import FilterButton from 'FilterButton.js';

function FilterButton({options, setOptions}) 
{

return (           
          <select            
            value={options} 
            onChange={(e) => setOptions(e.target.value)}>
              <option value="A-Z">FilterAZ</option>
              <option value="Z-A">FilterZA</option>
            </select>
            )
} 

export default FilterButton;

