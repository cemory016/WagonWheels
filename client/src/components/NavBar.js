import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: red;
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles>
        <h1>Wagon Wheels Market</h1>
        <p>
          <br />
          <Link to="/">Home Page</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
          <br />
          <Link to="/login">Login</Link>
        </p>
      </NavBarStyles>
    )
  }
}


export default NavBar