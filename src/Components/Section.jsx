import React from 'react'
import { Route } from 'react-router-dom'


import Product from './Section/Product'
import Details from './Section/Details'
import Cart from './Section/Cart'
import Payment from './Section/Payment'
import About from './Section/About'
import Login from './Section/Login'


const Section = () => {
    return (
        <section>
            <Route path="/" component={Product} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/product/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
        </section>
    )
}

export default Section
