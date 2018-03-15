import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class EditFarmer extends Component {
    state = {
        farmer: {
            farmerName: " ",
            email: " ",
            location: " ",
            password: " ",
        },
    }
    // componentDidMount = () => {
    //     const farmerId = this.props.match.params.farmerId
    // }

    // updateUser = () => {
    //     axios.patch(`/api/user/${this.props.match.params}`, this.state.editUser)
    //         .then((response) => {
    //             this.setState({ editUser: response.data.editUser })
    //         })
    // }
    updateFarmer = (event) => {
        event.preventDefault()
        const farmerId = this.state.farmer._id
        console.log(farmerId)
        const payload = this.state.farmer
        axios.patch('/api/farmer/${farmerId}', payload).then(res => {
            this.setState({ farmerId: res.data })
        })
    }

    handleChange = (event) => {
        // const newState = {...this.state.Farmer}
        // newState[event.target.name] = event.target.value
        // this.setState(newState)
        const attribute = event.target.name
        const newState = {...this.state.farmer}
        newState[attribute] = event.target.value 
        this.setState({farmer: newState})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateFarmer}>
                    <div>
                        <input type='text'
                            name="farmerName"
                            placeholder="FarmerName"
                            value={this.state.farmerName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="location"
                            placeholder="Location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>


                    <button type="submit">Save Changes
                    </button>

                </form>
            </div>
        );
    }
}

export default EditFarmer;