import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant' / + this.props.match.params.id).then((response) => {
            response.json().then((result) => {

                this.setState({
                    name: result.name,
                    email: result.email,
                    id: result.id,
                    rating: result.rating,
                    address: result.address
                })
            })
        })
    }
    update() {
        fetch("http://localhost:3000/restaurant" / +this.state.id, {
            method: 'PuT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been Updated")
            })
        })

    }
    render() {
        console.warn(this.props.match.params.id);
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <div>

                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /><br /> <br />
                    <button onClick={() => { this.update() }}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;