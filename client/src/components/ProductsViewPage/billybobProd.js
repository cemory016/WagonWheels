import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Body } from 'react-materialize'
import axios from 'axios'
import styled from 'styled-components'



class billybobPro extends Component {

  render () {
    return (
      <div>
        <h1>Billy Bobs Products</h1>
        <div>
           <img src='../Img/immo-wegmann-544228-unsplash.jpg' />
           <img src='../Img/freddie-collins-424635-unsplash.jpg' />
           <img src='../Img/kelly-neil-558253-unsplash.jpg' />
        </div>
      </div>
    )
  }
}

export default billybobPro