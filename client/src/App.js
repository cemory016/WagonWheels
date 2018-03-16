import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Card, Row, Col } from 'react-materialize'
import HomeViewPage from './components/HomeViewPage/HomeViewPage'
import LogIn from './components/LogInViews/LogIn'
import SignUpViews from './components/LogInViews/SignUpViews'
import UserEdit from './components/UserViewPage/UserEdit'
import UserView from './components/UserViewPage/UserView'
import Billybob from './components/FarmerViewPage/Billybob'
import FarmerView from './components/FarmerViewPage/FarmerView'
import FarmerEdit from './components/FarmerViewPage/FarmerEdit'
import ProductView from './components/ProductsViewPage/ProductView'
import MarketView from './components/MarketView/MarketView'
import AllUsers from './components/UserViewPage/AllUsers'
import billybobProd from './components/ProductsViewPage/billybobProd'
import DecaturMkt from './components/MarketView/decaturMkt'

import NavBar from './components/NavBar'

class App extends Component {
  //set state, axios and lifecycle(willmount) then render
  state = {
    user: [],
    market: [],
    farmer: [],
  }
  componentWillMount() {
    this.getUser()
    this.getFarmer()
    this.getMarket()
  }


  getUser = () => {
    axios.get('/api/user')
      .then(response => {
        const user = response.data
        this.setState({ user })
      }).catch((err) => {
        console.log(err)
      })
  }
  getMarket = () => {
    axios.get('/api/market')
      .then(response => {
        const market = response.data
        this.setState({ market })
      }).catch((err) => {
        console.log(err)
      })
  }
  getFarmer = () => {
    axios.get('/api/farmer')
      .then(response => {
        const farmer = response.data
        this.setState({ farmer })
      }).catch((err) => {
        console.log(err)
      })
  }
 

  render() {
    const UsersPageComponent = () =>
      (<UserView user={this.state.user} />)
      const MarketPageComponent = () => 
      (<MarketView market={this.state.market} />)
      const FarmerPageComponent = () =>
      (<FarmerView farmer={this.state.farmer} />)
   
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeViewPage} />
            <Route exact path="/market" component={MarketView} />
            <Route exact path="/marketview/decatur" component={DecaturMkt} />
            <Route exact path="/signup" component={SignUpViews} />
            <Route exact path="/user/:userId" component={UserView} />
            <Route exact path="/user/:userId/edit" component={UserEdit} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/farmer" component={FarmerView} />
            <Route exact path="/farmer/:farmerId" component={FarmerView} />
            <Route exact path="/user/allusers" component={AllUsers} />
            <Route exact path="/farmer/billybob" component={Billybob} />
            <Route exact path="/farmer/billybob/billybobProd" component={billybobProd} />
          
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App