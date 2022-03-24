import React from 'react'
import Product from './Product'

const Products = ({ products, onDelete }) => {
    return (
        <div>
            <h1>OUR PRODUCTS</h1>
            {products.map((product, index) => (
                <Product key={index} product={product} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Products