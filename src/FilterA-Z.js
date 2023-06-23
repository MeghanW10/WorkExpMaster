import React from "react";
import FilterAZ from './FilterA-Z.js';
import data from './data.json';
import DataItem from './DataItem';



function FilterAZ() {




  
return(<div>  
        {data.map(item => (<DataItem product={item}/>))}





</div>)}


export default FilterAZ