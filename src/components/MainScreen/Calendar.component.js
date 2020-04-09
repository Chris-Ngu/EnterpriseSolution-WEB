import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

const Axios = require('axios');

export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Calendar screen</h1>
            </div>
        )
    }
}