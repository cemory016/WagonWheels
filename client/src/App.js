import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
//import styled from 'styled-components'
import HomeViewPage from './components/HomeViewPage/HomeViewPage'
import LogIn from './components/LogInViews/LogIn'
import SignUpViews from './components/LogInViews/SignUpViews'
import UserView from './components/UserViewPage/UserView'
import FarmerView from './components/FarmerViewPage/FarmerView'
import ProductView from './components/ProductsViewPage/ProductView'
import MarketsView from './components/MarketsView/MarketsView'
import NavBar from './components/NavBar'

class App extends Component {
  //set state, axios and lifecycle(willmount) then render
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomeViewPage} />
            <Route exact path="/markets" component={MarketsView} />
            <Route exact path="/user/signup" component={SignUpViews} />
            <Route exact path="/user" component={UserView} />
            <Route exact path="/login/user" component={LogIn} />
            <Route exact path="/farmer/signup" component={SignUpViews} />
            <Route exact path="/farmer" component={FarmerView} />
            <Route exact path="/login/farmer" component={LogIn} />
            <Route exact path="/farmer/:farmerId" component={ProductView} />
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App