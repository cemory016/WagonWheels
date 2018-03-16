import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
      <Navbar brand='Wagon Wheels Market' right>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/signup'>Sign Up</NavItem>
        <NavItem href='/login'>Login</NavItem>
      </Navbar>
    )
  }
}


export default NavBar
