import React from 'react'
import Product from './Product'

const Products = ({ products, onDelete }) => {
    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} product={product} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Products