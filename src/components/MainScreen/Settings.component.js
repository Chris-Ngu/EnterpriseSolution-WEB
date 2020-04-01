import Navbar from '../Navbar.component';
import React, { Component } from "react";
const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');
const Axios = require('axios');

/*
Picture
User name -
email - 
password (censored out) - 
date registered-
Project count

Admin access to mongodb
messager settings/ preferences (do not disturb, etc...)
Color preferences of website (CSS Choices)
=====Change email option
=====change password option
=====change profile picture

Request queue(Class wrapper)
    -Requested user
    -date
    -Ticker number
Show profile picture
*/

export default class Settings extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getToken = this.getToken.bind(this);

        this.state = {
            name: '',
            password: '*****',
            createdAt: '',
            createdprojects: 0,
            email: ''

        }
    }

    componentDidMount = () => {
        this.getToken();
    }
    getToken = () => {

        const userToken = localStorage.getItem("JWT");
        if (!userToken) return alert('No web token found');

        //
        //
        //
        //
        //remove secret key
        const decoded = jwt.verify(userToken, "PPwU!!!SH$F%m9dVn!BAS");
        this.setState({
            name: decoded.name
        });

        //double check not to return hash value
        Axios.post('http://localhost:5000/admin/information', decoded)
            .then(user => {
                this.setState({
                    email: user.data.email,
                    createdprojects: user.data.createdprojects,
                    createdAt: user.data.createdAt.substring(0,10)
                })
            })

    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>User Settings</h1>
                <b>Current user: {this.state.name}</b>
                <br />
                <b>Password: {this.state.password}</b>
                <br />
                <b>Email: {this.state.email}</b>
                <br />
                <b>Projects Submitted: {this.state.createdprojects}</b>
                <br />
                <b>Joined On: {this.state.createdAt}</b>
            </div>
        );
    }
}
