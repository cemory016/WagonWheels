import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import HomeViewPage from './components/HomeViewPage/HomeViewPage'
// import UserViewPage from './components/UserViewPage'
// import FarmerViewPage from './components/FarmerViewPage'
// import ProductViewPage from './components/ProductViewPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/loginfarmer'>Farmer Login</Link>
            <Link to='/loginuser'>Customer Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomeViewPage}/>
            {/* <Route path="/loginuser" component={UserViewPage}/>
            <Route path="/loginfarmer" component={FarmerViewPage}/>
            <Route path="/farmer/:farmerId" component={ProductViewPage}/>  */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App