import React, { Component } from "react";
import axios from 'axios'
import { Button, Card, Row, Col } from 'react-materialize'

class NewFarmerForm extends Component {
  state = {
    farmerName: '',
    farmName: '',
    farmerEmail: '',
  };

  handleChange = (event) => {
      const farmer = event.target.name
      const newState = {...this.state}
      newState[farmer] = event.target.value
      this.setState(newState)
  }

  handleSubmit = async (event) => {
      event.preventDefault()
      const payload = {
          farmerName: this.state.farmername
      }
      console.log(this.state)
      await axios.post('/api/farmer', payload)
      await this.props.getAllFarmer()
  }

  render() {
    return (
      <div>
        <h2>New Farmer Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="farmerName">Farmer Name: </label>
            <input onChange={this.handleChange} type="text" name="farmerName" value={this.state.farmerName} />
          </div>
          <div>
            <label htmlFor="farmName">Farm Name: </label>
            <input onChange={this.handleChange} type="text" name="farmName" value={this.state.farmName} />
          </div>
          <div>
            <label htmlFor="farmerEmail">email: </label>
            <input onChange={this.handleChange} type="text" name="farmerEmail" value={this.state.farmerEmail} />
          </div>
          <Button waves='light' node='a'> Submit </Button>
        </form>
      </div>
    );
  }
}

export default NewFarmerForm;