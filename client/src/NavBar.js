import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: palegoldenrod;
`

class NavBar extends Component {
  render () {
    return (
      <NavBarStyles>
        <h1>Wagon Wheels</h1>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/loginfarmer">Farmer LogIn</Link>
          </li>
          <li>
            <Link to="/loginuser">User LogIn</Link>
          </li>
        </ul>
      </NavBarStyles>
    )
  }
}

export default NavBar
