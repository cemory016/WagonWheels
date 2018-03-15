import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: [],
    farmers: [],
    redirectToUser: ''
  }
  handleChange = (event) => {
    const newState = { ...this.state }
    newState[ event.target.username ] = event.target.value
    this.setState(newState)
  }
  handleChange = (event) => {
    const newState = { ...this.state }
    newState[ event.target.farmername ] = event.target.value
    this.setState(newState)
  }
  getAllUsers = () => {
    axios.get('localhost:3001/api/users').then(res => {
      this.setState({users: res.data})
    })
  }
  getAllFarmers = () => {
    axios.get('localhost:3001/api/farmers').then(res => {
      this.setState({farmers: res.data})
    })
  }
  componentDidMount () {
    this.getAllUsers(() => {
      this.getAllFarmers()
    })
  }
  render () {
    return (
      <div>
        <h1>Farmer Log In</h1>
        <form onSubmit={this.userId}>
        <label htmlFor="name">Farmer User Name</label>
            <input type="text" name="farmername"
              value={this.state.FarmerName}
              onChange={this.handleChange}
            />
        <label htmlFor="name">Password</label>
            <input type="text" name="farmerpassword"
              value={this.state.FarmerPassword}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">submit</button>
            </form>
        <br />
        <h1>User Log In</h1>
        <form onSubmit={this.userId}>
        <label htmlFor="name">User Name</label>
            <input type="text" name="username"
              value={this.state.UserName}
              onChange={this.handleChange}
            />
        <label htmlFor="name">Password</label>
            <input type="text" name="userpassword"
              value={this.state.UserPassword}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">submit</button>
            </form>
      </div>
    )
  }
}

export default LogIn