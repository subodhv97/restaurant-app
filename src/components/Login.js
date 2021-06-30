import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    login() {
        console.warn(this.state)

        fetch('http://localhost:3000/login?q=' + this.state.username).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp);
                if (resp.length > 0) {
                    console.warn(this.props)
                }
                else {
                    alert("Please check your username and password")
                }


            })
        })
    }
    render() {
        return (
            <div>
                <h1>Login Here</h1>
                <input name="user" type="test" onChange={(event) => this.setState({ username: event.target.value })} /> <br /><br></br>
                <input name="password" type="text" onChange={(event) => this.setState({ password: event.target.value })} /> <br /><br></br>
                <button onClick={() => { this.login() }}>Login</button>
            </div>
        );
    }
}

export default Login;