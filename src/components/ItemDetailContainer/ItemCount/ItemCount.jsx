import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div className='ButtonAdd'> 
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount