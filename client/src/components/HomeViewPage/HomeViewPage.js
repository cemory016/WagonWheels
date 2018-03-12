import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeViewPage extends Component {
  render () {
    return (
      <div>
        <h1>Wagon Wheel Market</h1>
        <Link to="/loginfarmer">Farmers, Please Log In To Get Started</Link>
        <Link to="/loginuser">Customers, Please Log In To Get Started</Link>
      </div>
    )
  }
}

export default HomeViewPage