import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import Navbar from '../utils/Navbar';
import Carousel from '../utils/Carousel'

import axios from 'axios';
=======
import "../utils/styles/login.css"



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




=======
                <div className="row">

                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={this.onLogIn} className="form-signin">
                            <div className="text-center mb-4 mt-5">
                                <h1 className="h3 mb-3 font-weight-normal">Appointment Manager</h1>
                                <p>Please enter your email address or username to Log in</p>
                            </div>

                            <div className="form-label-group mb-2">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Username (Email)" autoFocus />
                            </div>






                        <Carousel />

                        <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </form>
=======
                            <button className="btn btn-lg btn-primary btn-block" type="submit" id="button">Log in</button>
                        </form>
                    </div>

                </div>

            </div>
        );

    }
}
export default LogIn;