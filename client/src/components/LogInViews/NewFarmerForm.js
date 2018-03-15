import React, { Component } from "react";
import axios from 'axios'

class NewFarmerForm extends Component {
  state = {
    farmerName: ''
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
        <h1>hey</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="farmername">FarmerName: </label>
            <input onChange={this.handleChange} type="text" name="farmerName" value={this.state.farmerName} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewFarmerForm;