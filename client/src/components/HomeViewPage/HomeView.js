import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HomeView extends Component {
  render () {
    return (
      <div>
        <h1>Wagon Wheels Market</h1>
        <Link to="/loginfarmer">Farmers, Please Log In To Get Started</Link>
        <Link to="/loginuser">Shoppers, Please Log In To Get Started</Link>
      </div>
    )
  }
}

export default HomeView 