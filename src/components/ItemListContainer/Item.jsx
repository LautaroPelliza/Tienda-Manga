import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({product}) {
    return (
        <div key={product.id} className="card">
            <img className='img-card' src={product.image[0]} alt="" />
            <div className='body-card'>
                <h3 >{product.name.toUpperCase()}</h3>
                <p className='price'>${product.price}</p>
                <Link to={`/detail/${product.id}`}>
                    <button className='button'>Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item