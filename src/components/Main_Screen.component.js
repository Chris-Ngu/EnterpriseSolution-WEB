import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

import Navbar from './Navbar.component';

export default class MainScreen extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar/>
                    <h1>Test here</h1>
                </div>
            </Router>
        )
    }
}
