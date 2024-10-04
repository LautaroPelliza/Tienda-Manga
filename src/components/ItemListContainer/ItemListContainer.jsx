import React from 'react'
import image from '../../assets/kakashi.png'
function ItemListContainer({greeting}) {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{greeting}</h1>
            <img src={image} alt="" style={{width: '400px', height: '400px'}} />
        </div>
    )
}

export default ItemListContainer