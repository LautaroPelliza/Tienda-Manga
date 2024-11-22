import { createContext, useState } from "react";


const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newProduct) => {
        const tempCart = [...cart];
        const productIndex = cart.findIndex(product => product.id === newProduct.id);
        if(productIndex >= 0){
            tempCart[productIndex].quantity += newProduct.quantity;
            setCart(tempCart);
            return;
        }else 
            setCart([...cart, newProduct]);
        
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((acc, product) => acc + product.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
        return price
    }

    const deleteProductById = (id) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([])
    }
    return (
        <cartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, clearCart }}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider}