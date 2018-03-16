import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'



class User extends Component {
  state = {
      //changed from squgglie to square brackets
      user: [],
      redirect: false,
    };

    componentDidMount = () => {
      const userId = this.props.match.params.userId
      axios.get(`/api/user/${userId}`)
        .then((response) =>{
           const user = response.data
        this.setState({ user }) 
        console.log(this.state.user)
        })
        
    }

  render() {
      return (
          <div>
              Hi from UserProfile
               <br/>
              <h3>Name: {this.state.user.userName}</h3>
              <br />
              <h4>Location: {this.state.user.userLocation}</h4>
              <br />
              <h4>Family size: {this.state.user.userFamilySize}</h4>
              <br />
              <h4>{this.state.user.userEmail}</h4>
              <br />
              <Link to={`/user/${this.state.user._id}/edit`}>edit page</Link>
          </div>
      );
  }
}

export default User;


