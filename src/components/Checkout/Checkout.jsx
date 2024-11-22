import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./Checkout.css"

function Checkout () {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, clearCart } = useContext(cartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        const response = await validateForm(dataForm)
        if(response.status === "success"){
            uploadOrder(order)
        }else{
            toast.error(response.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
                })
            .finally(() => {
                clearCart()
                toast.success("orden generada correctamente!")
            })
    }

    return (
        <div className="checkout">
        {idOrder === null ? (
        <form onSubmit={handleSubmitForm} className="form-checkout">
            <h2 className="title-checkout">Checkout</h2>
            <div className="content-input">
            <label className="label">Nombre completo:</label>
            <input
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeInput}
                placeholder="Ingresa tu nombre completo"
                className="input-checkout"
            />
            </div>
    
            <div className="content-input">
            <label className="label">Teléfono:</label>
            <input
                type="number"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
                placeholder="Ingresa tu teléfono"
                className="input-checkout"
            />
            </div>
    
            <div className="content-input">
            <label className="label">Email:</label>
            <input
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeInput}
                placeholder="Ingresa tu email"
                className="input-checkout"
            />
            </div>
    
            <button type="submit" className="button-send-order">
            Enviar orden
            </button>
        </form>
        ) : (
        <div className="order-success">
            <h2>Gracias por tu compra!</h2>
            <p>nro de compra: {idOrder}</p>
            <Link to="/" className="button-to-home">
            Volver al inicio
            </Link>
        </div>
        )}
    </div>
    
    )
}
export default Checkout