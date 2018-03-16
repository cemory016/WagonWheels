import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
//import styled from 'styled-components'
import { Button, Card, Row, Col } from 'react-materialize'
import HomeViewPage from './components/HomeViewPage/HomeViewPage'
import LogIn from './components/LogInViews/LogIn'
import SignUpViews from './components/LogInViews/SignUpViews'
import UserEdit from './components/UserViewPage/UserEdit'
import UserView from './components/UserViewPage/UserView'
import FarmerView from './components/FarmerViewPage/FarmerView'
import FarmerEdit from './components/FarmerViewPage/FarmerEdit'
import ProductView from './components/ProductsViewPage/ProductView'
import MarketsView from './components/MarketsView/MarketsView'
import NavBar from './components/NavBar'

class App extends Component {
  //set state, axios and lifecycle(willmount) then render
  state = {
    user: [],
    farmer: [],
    market: [],
  }
  componentWillMount() {
    this.getUser()
    this.getFarmer()
//   this.getMarkets()
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
  getFarmer = () => {
    axios.get('/api/farmer')
      .then(response => {
        const farmer = response.data
        this.setState({ farmer })
      }).catch((err) => {
        console.log(err)
      })
  }
  // getMarket = () => {
  //   axios.get('/api/markets')
  //     .then(response => {
  //       const user = response.data
  //       this.setState({ markets })
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // }
  
  render() {
    const UsersPageComponent = () =>
    (<UserView user={this.state.user}/>)
    const FarmerPageComponent = () =>
    (<FarmerView farmer={this.state.farmer}/>)
    const MarketPageComponent = () =>
    (<MarketsView market={this.state.market}/>)
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeViewPage} />
            <Route exact path="/markets" component={MarketsView} />
            <Route exact path="/signup" component={SignUpViews} />
            <Route exact path="/user/:userId" component={UserView} />
            <Route exact path="/user/:userId/edit" component={UserEdit} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/farmer" component={FarmerView} />
            <Route exact path="/farmer/:farmerId" component={FarmerView} />
            <Route exact path="/farmer/:farmerId/edit" component={FarmerEdit} />
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App