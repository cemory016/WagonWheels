import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MarketsView extends Component {
 
  render () {
    return (
      <div>
        <h1>Local Markets</h1>
        <p>a list of all the markets from all the farmers markets list</p>
        <p>have each market a link to the individual market page where the individual farmers at that particular market can be seen.{this.props.farmers}</p>
      </div>
    )
  }
}

export default MarketsView


// import FarmersViewPage from 
// <MarketsView marketsFarmers={this.props.marketFarmers}/>