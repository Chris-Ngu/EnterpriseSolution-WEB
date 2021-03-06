import Navbar from '../Navbar.component';
import React, { Component } from "react";
import { Button, Media } from 'reactstrap';

import myPlaceHolderPicture from '../../140x100.png'
const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');
const Axios = require('axios');

/*
Picture


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
            email: '',
            passwordBox: false,
            emailBox: false
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
                    createdAt: user.data.createdAt.substring(0, 10)
                })
            })

    }
    render() {
        return (
            <div className="profileSettings">
                <Navbar />
                <h2>User Settings</h2>

                <Media className="profilePicture">
                    <Media href="#">
                        <Media object src={myPlaceHolderPicture} alt="Generic placeholder image" />
                    </Media>
                </Media>

                <b>Current user: {this.state.name}</b>
                <br />
                <b>Password: {this.state.password}</b>
                <div className="changePassword">
                    <Button className="btn-lg btn-dark btn- block" >
                        Change Password
                    </Button>
                </div>
                <br />
                <b>Email: {this.state.email}</b>
                <div className="changeEmail">
                    <Button className="btn-lg btn-dark btn- block" >
                        Change Email
                    </Button>
                </div>
                <br />
                <b>Projects Submitted: {this.state.createdprojects}</b>
                <br />
                <b>Joined On: {this.state.createdAt}</b>
            </div>
        );
    }
}
