import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import Navbar from '../utils/Navbar';
import Carousel from '../utils/Carousel'
import axios from 'axios';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const { email, password } = this.state;

        axios
            .post(
                "http://localhost:3001/users",
                {
                    user: {
                        email: email,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }


    render() {
        return (


            <div className="container">

                <Navbar />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required />


                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required />







                        <Carousel />

                        <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </form>
                </div>

            </div>
        );

    }
}
export default LogIn;