import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUpViews extends Component {
  render () {
    return (
      <div>
        <h1>Farmer Sign Up</h1>
        <h1>User Sign Up</h1>
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