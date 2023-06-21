import React from 'react';
import data from './data.json';
import DataItem from './DataItem';



function List() {




  
return(<div>  
        {data.map(item => (<DataItem product={item}/>))}





</div>)}
export default List;