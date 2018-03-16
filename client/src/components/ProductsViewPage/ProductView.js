import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class ProductView extends Component {
  state ={
    products: [],
    redirect: false,
  };

  componentDidMount = () => {
    const productsId = this.props.match.params.productsId
    axios.get(`/api/farmer/:farmerId/products/:productsId`)
      .then((response) =>{
         const product = response.data
      this.setState({ product }) 
      console.log(this.state.product)
      })
      
  }
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