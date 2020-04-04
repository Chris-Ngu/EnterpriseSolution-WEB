import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from './Navbar.component';

//Render some type of default getting for have default login screen
export default class MainScreen extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1 classname="display-3">Welcome!</h1>
                    <p classname="lead">We are currently under construction.</p>
                    <hr className="my-2" />
                    <p>If you have any questions, please contact the creator of this project with the button below.</p>
                    <p className="lead">
                        <Button color="primary" type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "http://github.com/chris-ngu";
                        }}>
                            Contact Me!
                        </Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}