import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';
import DataTable from './DataTable.js';
function GalleryView() {

//   const [itemNo, setItemNo] = useState(0);
//   <table>
//   <tr>
//        <td>
//        <img src={`../img/${product.pic}`} alt="product pic"></img>
//        </td>
//        <td>
//        <img src={`../img/${hammer_large.jpg}`} alt="product pic"></img>
//        </td>
//        <td>
//        <img src={`../img/${hammer_medium.jpg}`} alt="product pic"></img>
//        </td>
//        <td>
//        <img src={`../img/${hammer.jpg}`} alt="product pic"></img>
//        </td>
//        <td>
//        <img src={`../img/${screwdriver_large.jpg}`} alt="product pic"></img>
//        </td>
//        <td>
//        <img src={`../img/${screwdriver}`} alt="product pic"></img>
//        </td>
//   </tr>
// </table>
const GalleryView = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "public/img/hammer_large.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "public/img/hammer_medium.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "public/img/hammer.jpg",
  },
];


  return <GalleryView imgArray={imagesArray} columnWidth={230} gapSize={24} />;

  
  return (<div>
            <DataItem product={data[itemNo]} />
            <button onClick={() => previousPage()}><div>Previous</div></button>
            <button onClick={() => setItemNo(6)}><div>Last Item</div></button>
            <button onClick={() => nextPage()}><div>Next</div></button>  
            <button onClick={() => setItemNo(0)}><div>First Item</div></button>
        
          </div>);



}

export default DataTable; 