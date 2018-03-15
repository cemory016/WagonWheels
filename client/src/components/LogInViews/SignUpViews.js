import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
import NewFarmerForm from './NewFarmerForm'
import axios from 'axios'

class SignUpViews extends Component {
  state = {
    user: [],
    farmer: [],
    showForm: false
  };

  componentWillMount() {
    this.getAllUser();
  }
  componentWillMount() {
    this.getAllFarmer();
  }
  getAllUser = async () => {
    const res = await axios.get("/api/user");
    this.setState({ user: res.data });
  };

 
  getAllFarmer = async () => {
    const res = await axios.get("/api/farmer");
    this.setState({ farmer: res.data });
  };
  toggleNewForm = () => {
      this.setState({ showForm: !this.state.showForm })
  }

  render () {
    return (
      <div>
      {this.state.showForm ? (
            <NewFarmerForm getAllUser={this.getAllFarmer}/>
        ) : null}
        {this.state.farmer.map(farmer => (
            <div key={farmer._id}>
          <Link to={'farmer/${farmer._id}'}>
            <h3>{farmer.farmerName}</h3>
          </Link>
          </div>
        ))}
        <button onClick={this.toggleNewForm}>New User Sign Up</button>
        {this.state.showForm ? (
            <NewUserForm getAllUser={this.getAllUser}/>
        ) : null}
        {this.state.user.map(user => (
            <div key={user._id}>
          <Link to={'user/${user._id}'}>
            <h3>{user.username}</h3>
          </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default SignUpViews

// createUser = async (newUser) => {
//   // send the user to the database
//   const response = await axios.post(`/api/users`, {user : newUser})

//   // grab the new user we just created in the database
//   //const newUser = response.data

//   // put that new user into our list of users on the `state`
//   const users = [...this.state.users]
//   users.push(newUser)
//   this.setState({ users: response.data.user })
// }
// // //To edit a user

// updateUser = async (user) => {
//   console.log(user._id)
//   const response = await axios.patch(`/api/users/${user._id}`, user)
//   const users = this.UserDatabase
// }

// deleteUser = async (user) => {
//   console.log(`from the delete router`)
//   await axios.delete(`/api/users/${user._id}/delete`)
// }