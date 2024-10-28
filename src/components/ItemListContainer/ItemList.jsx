import React from 'react'
import Item from './Item'

function ItemList({products}) {
    
    return (
        <div className='card-container'>
            {products.map(product => (
                <Item key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ItemList