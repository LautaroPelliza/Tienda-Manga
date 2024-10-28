import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import './ItemDetail.css'

function ItemDetail({ name, image, description, category, price, stock }) {
    const [currentImage, setCurrentImage] = useState(image[0])
    const images = image.filter ((image) => image !== currentImage)
    const handleImageChange = (image) => {
        setCurrentImage(image)
    }
    return (
        <article className="CardDetail">
            <picture className='imagesDetailContainer'>
                <div >
                    <img src={currentImage} alt={name} className='mainImage'/>
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
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Categoria: {category}</h3>
                <h3>Precio: ${price}</h3>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Agregado', quantity)} />
            </section>
        </article>
    )
}

export default ItemDetail