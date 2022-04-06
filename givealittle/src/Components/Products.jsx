import React from 'react'
import ProductBox from './ProductBox'
// import pimage1 from '../images/s1.png'
// import pimage2 from '../images/s2.png'
import mockAPI from './mockAPI'

function Products() {
  const renderProduct = (product, index) => {
    return (
      <div id='products'>
        <div class='a-container' key={index}>
          <ProductBox image={product.url} title={product.name} id = {product.id}/>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>CHOOSE & ENJOY</h1>
      <p>Life is hard enough already. Let us make it a little easier. Online shopping. Simple</p>
      {mockAPI.map(renderProduct)}
    </div>
  )
}

export default Products