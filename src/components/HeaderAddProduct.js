import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const HeaderAddProduct = ({ onAdd, showAdd }) => {
    return (
        <div className='header'>
            <h1>ADD A NEW PRODUCT</h1>
            <button onClick={onAdd}>
                {showAdd
                    ? <FaCaretUp className='caret' />
                    : <FaCaretDown className='caret' />
                }
            </button>
        </div>
    )
}

export default HeaderAddProduct