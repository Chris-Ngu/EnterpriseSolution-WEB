import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
//import some application to send reset
//Check input and show message "Sent email if account exists"
//Change username to Email

export default class Forgot extends Component {
    render() {
        return (
            <Form className="forgot-form">
                <h1>
                    <center><span className="font-weight-bold">Forgot</span>Password?</center>
                </h1>
                <h2 className="text-center">No worries!</h2>
                <FormGroup>
                    <label>Username</label>
                    <Input type="text" placeholder="Username" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">
                    Submit
                </Button>
                <div className="text-center pt-3 mb-3">
                    <a href="/">Back to Login screen</a>
                </div>
            </Form>
        )
    }
}