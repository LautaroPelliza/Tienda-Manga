import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    
    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" className='logo'></img></Link>
            <ul>
                <li>
                    <Link to="/category/Shonen" >Shonen</Link>
                </li>
                <li>
                    <Link to="/category/Seinen" >Seinen</Link>
                </li>
                <li>
                    <Link to="/category/Manhwa" >Manhwa</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar