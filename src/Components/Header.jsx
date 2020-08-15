import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Css/Header.css'
import { DataContext } from './Context'

import Menu from './Svg/bars-solid.svg'
import Cart from './Svg/cart-plus-solid.svg'
import Close from './Svg/times-solid.svg'






export default class Header extends Component {

    static contextType = DataContext

    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { toggle } = this.state
        const { cart } = this.context
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt='menu' width='20' />
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? 'toggle' : ''}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className='close' onClick={this.menuToggle}>
                            <img src={Close} alt='close' width='20' />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt='cart' width='20' />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}





