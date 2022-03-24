import React from 'react'
import { FaImage, FaTimes } from 'react-icons/fa'

const Product = ({ product, onDelete }) => {
    return (
        <div className="product">
            <div className="productImage">
                <FaImage className="faImage" />
            </div>
            <div className="productText">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className="productInfo">
                <h5>{product.stock}</h5>
                <h4>{"$ " + product.price}</h4>
            </div>
            <div className="productX">
                <h3>
                    <FaTimes onClick={() => onDelete(product.id)} />
                </h3>
            </div>

        </div>
    )
}

export default Product