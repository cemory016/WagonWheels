import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductView extends Component {
  render () {
    return (
      <div>
        <h1>Product</h1>
        <div>
            <ul>
                <li>tomato</li>
                <li>beans</li>
                <li>eggs</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default ProductView