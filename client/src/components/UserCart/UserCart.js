import React, { Component } from 'react'
import Button from './styled-components/Button'
import state from './HomePage'
import ProductList from './ProductList'
import shopView from './ShopView' 

class Product extends Component {
  deleteProduct = () => {
    this.props.deleteProductFromProductList(this.props.id)
  }
  addToCart = () => { this.props.addProductToCart(this.props.id) }

  render() {

    return (
      <div>
        <h5>{this.props.product.name}</h5>
        <p>Description: {this.props.product.description}</p>
        <p>Price: ${this.props.product.price}</p>
        <div>
          {this.props.admin
            ? <button onClick={this.deleteProduct}>Delete Product</button>
            : null
          }
        </div>
        <div>
          {this.props.shop
            ? <button onClick={this.addToCart}>Add to Cart</button>
            : null
          }
        </div>
      </div>
    )
  }
}

export default Product