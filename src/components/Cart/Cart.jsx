import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(cartContext)
    return (
        <div className='cartContainer'>
            <div className='cartProductContainer'>
                {
                    cart.map((product) => (
                        <div className='productCardCart' key={product.id}>
                            <img src={product.image[0]} width={100} alt={product.name} />
                            <p>{product.name}</p>
                            <p>Precio unitario: ${product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Subtotal: ${product.price * product.quantity}</p>
                            <button onClick={() => deleteProductById(product.id)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
            <div className='footerCart'>
                <p>
                    Total: ${totalPrice()}
                </p>
                <button onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart