import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
    }
    create() {
        //  console.warn(this.state)
        fetch("http://localhost:3000/restaurant", {
            method: 'POST',
            headers:{
                'content-Type':'application/json'
            },
            body: JSON.stringify(this.state)

        })
    }

    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /><br /> <br />
                    <button onClick={() => { this.create() }}>Create Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;