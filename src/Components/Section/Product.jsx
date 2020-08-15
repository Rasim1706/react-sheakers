import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../Css/Product.css'




export default class Product extends Component {
    static contextType = DataContext

    render() {
        const { products } = this.context
        return (
            <div id='product'>
                {
                    products.map((product) => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt={product.title} />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={() => this.context.onAddCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}



