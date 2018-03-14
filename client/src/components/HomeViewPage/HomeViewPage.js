import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeViewPage extends Component {
  render () {
    return (
      <div>
        <h1>Wagon Wheel Market</h1>
        <Link to="/markets">View a List of MARKETS</Link>
        <br />
        <Link to="/user/signup">Link to USER Sign Up Page</Link>
        <br />
        <Link to="/loginuser">USER, Please Log In To Get Started</Link>
        <br />
        <Link to="/farmer/signup">Link to FARMERS Sign Up Page</Link>
        <br />
        <Link to="/loginfarmer">FARMERS, Please Log In To Get Started</Link>
        
      </div>
    )
  }
}

export default HomeViewPage