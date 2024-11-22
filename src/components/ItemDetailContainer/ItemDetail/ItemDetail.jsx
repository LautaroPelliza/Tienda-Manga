import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { cartContext } from '../../../context/CartContext'
import './ItemDetail.css'

function ItemDetail({ product }) {
    const [currentImage, setCurrentImage] = useState(product.image[0])
    const images = product.image.filter ((image) => image !== currentImage)
    const handleImageChange = (image) => {
        setCurrentImage(image)
    }
    const { addProductInCart} = useContext(cartContext)

    const onAdd = (count) => {
        const productCart = {...product, quantity: count}
        addProductInCart(productCart)
    }

    return (
        <article className="CardDetail">
            <picture className='imagesDetailContainer'>
                <div >
                    <img src={currentImage} alt={product.name} className='mainImage'/>
                </div>
                <div className='secondaryImageContainer'>
                    {images.map((image) => (
                        <img
                            src={image}
                            key={image}
                            alt="secondary image"
                            className='secondaryImage'
                            onClick={() => handleImageChange(image)}
                        />
                    ))
                    }
                </div>
            </picture>
            <section>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>Categoria: {product.category}</h3>
                <h3>Precio: ${product.price}</h3>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </section>
        </article>
    )
}

export default ItemDetail