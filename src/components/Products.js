import React from 'react'
import Product from './Product'

const Products = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}

export default Products