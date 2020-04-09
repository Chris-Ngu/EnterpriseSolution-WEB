import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

const Axios = require('axios');

export default class External extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>External Messanger Screen</h1>
            </div>
        )
    }
}