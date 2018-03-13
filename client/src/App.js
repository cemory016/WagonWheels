import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
//import styled from 'styled-components'
import HomeViewPage from './components/HomeViewPage/HomeViewPage'
import UserView from './components/UserViewPage/UserView'
import FarmerView from './components/FarmerViewPage/FarmerView'
import ProductView from './components/ProductsViewPage/ProductView'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomeViewPage} />
            <Route exact path="/user" component={UserView} />
            <Route exact path="/farmer" component={FarmerView} />
            <Route exact path="/farmer/:farmerId" component={ProductView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App