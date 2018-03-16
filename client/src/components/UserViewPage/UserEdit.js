import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class EditUser extends Component {
    state = {
        User: {},
    }
    componentDidMount = () => {
        const userId = this.props.match.params.userId
    }

    updateUser = () => {
        axios.patch(`/api/user/${this.state.match.params}`, this.state.editUser)
            .then((response) => {
                this.setState({ editUser: response.data.editUser })
            })
    }
    // updateUser = (event) => {
    //     event.preventDefault()
    //     const userId = this.props.user._id
    //     console.log(userId)
    //     const payload = this.state.user
    //     axios.patch('/api/user/${userId}', payload).then(res => {
    //     this.setState({ userId: res.data})
    //     })
    //   }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                            name="UserName"
                            placeholder="Username"
                            onChange={this.handleChange}
                        
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="email"
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="Password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="Location"
                            placeholder="Location"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="FamilySize"
                            placeholder="FamilySize"
                            onChange={this.handleChange}
                        />
                    </div>


                    <button type="submit">Save Changes
                    </button>

                </form>
                <button type="delete">Delete User Profile</button>
            </div>
        );
    }
}

export default EditUser;