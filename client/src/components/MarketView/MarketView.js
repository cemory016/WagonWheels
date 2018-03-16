import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MarketView extends Component {
  state = {
    market: [],
    redirect: false,
  };

  componentDidMount = () => {
    const marketId = this.props.match.params.marketId
    axios.get('/api/market/${farmerId}')
      .then((response) => {
        const market = response.data
        this.setState({ market })
        console.log(this.state.market)
      })
  }
  render() {
    return (
      <container>
      <div>
        <h1>Local Markets</h1>
        <p>a list of all the markets from all the farmers markets list</p>
        <p>have each market a link to the individual market page where the individual farmers at that particular market can be seen.</p>
      </div>
      <div className="mktImg">
        {this.props.markets}
      </div>
      </container>
    )
  }
}

export default MarketView