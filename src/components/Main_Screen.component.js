import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import Axios from 'axios';

import Navbar from './Navbar.component';

//Render some type of default getting for have default login screen
export default class MainScreen extends Component {
    render() {
        return (
                <div className="container">
                    <Navbar />
                    <h1>Homepage/ MainScreen</h1>
                </div>
        )
    } 
}
