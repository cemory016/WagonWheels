import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const decaturMktImg = styled.img`
display: flex;
width: 40px;
height: 30px;
`
const collegeParkMktImg = styled.div`
display: flex;
vw: 2;
`
const MarketWords = styled.div`
text: 26px;
`

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
      <div className="MarketWords">
        <h1>Local Markets</h1>
        <p>a list of all the markets from all the farmers markets list</p>
        <p>have each market a link to the individual market page where the individual farmers at that particular market can be seen.</p>
      </div>
      <div >
        <h3><Link to={'/marketview/decatur'}>Decatur Market</Link></h3>
      <img className="decaturMktImg" src="../Img/annie-spratt-215755-unsplash.jpg" />
      </div>
      <div className="collegeParkMktImg">
      <h3><Link to={'/marketview/collegepark'}>College Park Market</Link></h3>
      <img src="../Img/2I1A4480__2_.0.jpg" />
      </div>
      </container>
    )
  }
}

export default MarketView