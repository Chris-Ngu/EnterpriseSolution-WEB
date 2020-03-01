import React, { Component } from 'react';
import { BrowserRouter as router, Route, link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
//import a registration checker here
//Redirect upon suc

export default class Register extends Component {
    render(){
        return (
            <Form className="register-form">
                <h1>
                <center><span className="font-weight-bold">Registration</span>Form</center>
                </h1>
                <h2 className="text-center">Please enter the required fields</h2>
                <FormGroup>
                    <label>Username*</label>
                    <Input type="text" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <label>Password*</label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <label>Confirm Password</label>
                    <Input type="password" placeholder="Password" />
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