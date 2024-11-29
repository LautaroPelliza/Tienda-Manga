import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <p>{count}</p>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div className='ButtonAdd'> 
                <button className='Button' onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount