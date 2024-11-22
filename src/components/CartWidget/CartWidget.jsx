import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const {totalQuantity} = useContext(cartContext)
    const quantity = totalQuantity()
    if (quantity === 0) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"></path></svg>
        )
    }
    return (
        <Link to= '/cart' style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"></path></svg>
            <span style={{padding: '5px', paddingRight: '10px',paddingLeft: '10px' ,marginLeft: '0px', fontWeight: 'bold', backgroundColor: 'red', color: 'white', borderRadius: '50%'}}>{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget