import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

import Navbar from './Navbar.component';
import Project from './MainScreen/Project.component';
import Message from './MainScreen/Message.component';
import Settings from './MainScreen/Settings.component';
import Authenticate from "./Authenticate.component";

//Render some type of default getting for have default login screen
export default class MainScreen extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <br />
                    <Route path="/project" exact component={Project} />
                    <Route path="/message" exact component={Message} />
                    <Route path="/Settings" exact component={Settings} />
                </div>
            </Router>
        )
    }
}
