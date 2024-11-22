import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(cartContext)
    if (cart.length === 0) {
        return (
            <div className='cartEmpty'>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Ir a la tienda</Link>
            </div>
        )
    }
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
                            <button className='deleteButton' onClick={() => deleteProductById(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m466.752 512l-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"></path></svg></button>
                        </div>
                    ))
                }
            </div>
            <div className='footerCart'>
                <p>
                    Total: ${totalPrice()}
                </p>
                <Link to='/checkout'><button className='button'>Finalizar compra</button></Link>
                <button className='clearButton' onClick={clearCart}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z"></path></svg></button>
            </div>
        </div>
    )
}

export default Cart