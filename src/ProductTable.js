import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quatity</th>
            <th>Image</th>
           </tr>
        </thead>
        <tbody>
            {products.map(item => {
                <ProductRow product={item} />
            })}
         </tbody>
        </table>
    )
}

export default ProductTable
