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
date registered
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
            dateRegistered: ''
        }
    }

    componentDidMount = () => {
        this.getToken();
    }
    getToken() {

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
        
        var foundUser = null;
        //double check decoded, nothing is being passed into this path
        //Check out why foundUser is never being assigned the returned value
        Axios.get('http://localhost:5000/admin/information', decoded)
            .then(function(user){
                foundUser = user;
            });

    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>User Settings</h1>
                <b>Current user: {this.state.name}</b>
                <br/>
                <b>Password: {this.state.password}</b>
                <br/>
                <b>Registration date: {this.state.dateRegistered}</b>
            </div>
        );
    }
}
