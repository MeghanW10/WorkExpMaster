import React from 'react';


function DataItem({product}) {
     return (
          // <div>
          //      <img src={`../img/${product.pic}`} alt="product pic"></img>
          //      <p>Name: {product.name}</p>
          //      <p>Size: {product.size}</p>
          //      <p>Department: {product.department}</p>
          //      <p>Price: {product.price}</p>
          // </div>
          <table>
               <tr>
                    <td>
                    <img src={`../img/${product.pic}`} alt="product pic"></img>
                    </td>
                    <td>
                    <p>Name: {product.name}</p>
               <p>Size: {product.size}</p>
               <p>Department: {product.department}</p>
               <p>Price: {product.price}</p>
                    </td>
               </tr>
          </table>
      )
}

export default DataItem;