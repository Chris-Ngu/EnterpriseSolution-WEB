import React, { Component } from "react";
const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');

/*
Admin access to mongodb
messager settings/ preferences (do not disturb, etc...)
Color preferences of website (CSS Choices)
=====Change email option
=====change password option
=====change profile picture
=====Date registered
=====Projects queued (Count)
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
            user: '',
            dateRegistered: ''
        }
    }

    componentDidMount = () => {
        this.state.user = this.getToken();
        this.state.dateRegistered = this.getAccountInformation(this.state.user);
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
        return (decoded.name)
    }
    getAccountInformation(username){
        Axios.get('http://localhost:5000/'+username)
        .then(
            res => this.setState({dateRegistered: res.data.createdAt})
        );
    }

    render() {
        return (
            <div>
                <h1>User Settings</h1>
                <b>{this.state.user}</b>
                <b>Registration date: {this.state.dateRegistered}</b>
            </div>
        );
    }
}
