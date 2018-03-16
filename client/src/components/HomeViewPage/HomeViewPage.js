import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Row, Col } from 'react-materialize'
import styled from 'styled-components'

const HomeButtons = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  color: palevioletred;
  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
`
const MarketWelcolme = styled.div`
margin: 2em;
padding: 10px;
border 5px;
`

class HomeViewPage extends Component {
  render() {
    return (
      <div>
        
          <h1>Wagon Wheel Market</h1>
    
        <HomeButtons>
          <Button waves='light' node='a' href='/markets'> Markets </Button>
          <Button waves='light' node='a' href='/signup'> Sign Up </Button>
          <Button waves='light' node='a' href='/login'> Login </Button>
        </HomeButtons>

        <div className="MarketWelcolme" >
          <p>Laudantium. Occaecat velit, yet beatae yet laudantium for aliquam. Inventore doloremque ullamco eaque or labore pariatur, in. Dicta sed or beatae so dolores, eius quam, proident. Totam commodo. Vel. Voluptate ex and numquam enim. Perspiciatis aliqua amet consequatur so exercitation and exercitationem. In laudantium so velit or dolore and pariatur. Quisquam magnam. Consequatur odit consequat commodi suscipit. Dicta excepteur. Iste error yet enim or voluptas incididunt illo but ad. Dolor in dolor, or est or dicta. Amet adipisci yet dolorem voluptas but ipsam. Dolor explicabo and nequeporro.</p>
          <p> Dolores elit but nemo aperiam but ex but ipsum. Magna modi aut, but autem ratione but ipsa culpa. Id veritatis magnam or eos perspiciatis incididunt. Tempor quia. Molestiae quaerat eum, consectetur or accusantium nostrud and aperiam. Laboriosam reprehenderit. Sequi dicta. Commodo voluptatem.</p>
          <p>Quam quia but reprehenderit or aperiam labore et. Sed ratione ipsa. Quam quaerat or sunt. Eos eaque totam sint. Nemo nemo magni or sint. Eu excepteur but iure and irure. Esse. Aut aliquip for minima so sint or aute. Nequeporro excepteur yet sint yet ullamco so cillum. Qui nemo veniam and dolore or officia but irure. Incidunt aperiam nostrum aliquip iure yet laboriosam. Veniam incidunt, sint but voluptatem voluptas. Elit consequat, and anim eos, yet ex officia. Do consequuntur and eos rem iste. Quasi doloremque, for nequeporro illo, deserunt deserunt so sunt. Consequat architecto consequat nequeporro for tempora. Corporis autem for amet qui, totam or voluptatem so error.</p>
        </div>
      </div>
    )
  }
}

export default HomeViewPage