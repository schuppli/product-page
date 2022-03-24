import React from 'react'
import { useState } from 'react'

const AddProduct = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please add a Name')
            return
        }
        if (!price) {
            alert('Please add a Price')
            return
        }

        onAdd({ name, description, price, stock })

        setName('')
        setDescription('')
        setPrice('')
        setStock('')
    }

    return (
        <div>
            <h1>ADD A NEW PRODUCT</h1>
            <form className="addProduct" onSubmit={onSubmit}>

                <div class='formControl'>
                    <label htmlFor="productName" id='labelName'>Name of Product</label>
                    <input
                        type="text"
                        id="productName"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class='formControl'>
                    <label htmlFor="productPrice" id='labelPrice'>Price of Product</label>
                    <input
                        type="number"
                        id="productPrice"
                        placeholder='Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div class='formControl'>
                    <label htmlFor="productDescription" id='labelDescription'>Description</label>
                    <input
                        type="text"
                        id="productDescription"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div class='formControl'>
                    <label htmlFor="productStock" id='labelStock'>Quantity in Stock</label>
                    <input
                        type="number"
                        id="productStock"
                        placeholder='In Stock'
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                <div className='formControl formControlCheck'>
                    <input type="submit" value="Save Product" id='submitAddProduct' />
                </div>

            </form>
        </div>
    )
}

export default AddProduct