import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <img src={logo} alt="logo"></img>
            <ul>
                <li>Shonen</li>
                <li>Seinen</li>
                <li>Manwha</li>
                <li>Coleccionables</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar