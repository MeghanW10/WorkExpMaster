import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';

function DataTable() {

  const [itemNo, setItemNo] = useState(0);

  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
  }
  function previousPage()
  {
    if (itemNo - 1 >= 0)
    {
      setItemNo(itemNo-1);
    }
  }
  
  return (<div>
            <DataItem product={data[itemNo]} />
            <button onClick={() => previousPage()}><div>Previous</div></button>
            <button onClick={() => setItemNo(6)}><div>Last Item</div></button>
            <button onClick={() => nextPage()}><div>Next</div></button>  
            <button onClick={() => setItemNo(0)}><div>First Item</div></button>
        
          </div>);



}

export default DataTable; 