import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Button, Nav } from 'reactstrap';

const Axios = require('axios');

export default class Management extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Management Screen</h1>
            </div>
        )
    }
}