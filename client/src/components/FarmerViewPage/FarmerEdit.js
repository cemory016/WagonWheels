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
        redirect: false
    }
    // componentDidMount = () => {
    //     const farmerId = this.props.match.params.farmerId
    // }

    updateFarmer = () => {
       const farmerId = this.props.match.params.farmerId
        axios.patch(`/api/farmer/${farmerId}`, this.state.farmer)
            .then((response) => {
                this.setState({ farmer: response.data, redirect:true })
            })
    }
    // updateFarmer = (event) => {
    //     event.preventDefault()
    //     const farmerId = this.state.farmer._id
    //     console.log(farmerId)
    //     const payload = this.state.farmer
    //     axios.patch('/api/farmer/${farmerId}', payload).then(res => {
    //         this.setState({ farmerId: res.data })
    //     })
    // }

    handleChange = (event) => {
        // const newState = {...this.state.Farmer}
        // newState[event.target.name] = event.target.value
        // this.setState(newState)
        const attribute = event.target.name
        const newState = { ...this.state.farmer }
        newState[attribute] = event.target.value
        this.setState({ farmer: newState })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const id = this.props.match.params.farmerId
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={'/farmer/${this.props.match.params.farmerId'} />
        } return (
            <div>
                <form onSubmit={this.handleSubmit}>
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