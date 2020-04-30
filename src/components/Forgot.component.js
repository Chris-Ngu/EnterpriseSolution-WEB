import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
//import axios from 'axios';
//import some application to send reset
//Check input and show message "Sent email if account exists"
//Change username to Email

export default class Forgot extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            successMessage: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email
        };

        //axios response here(probably GET)
        this.setState({
            email: '',
            successMessage:'If the email you provided is attached to an account, you should be receiving a password reset request shortly; hang tight!'
        });

        
        
    }

    render() {
        return (
            <Form className="forgot-form" onSubmit={this.onSubmit}>
                <h1>
                    <center><span className="font-weight-bold">Forgot</span>Password?</center>
                </h1>
                <h2 className="text-center">No worries!</h2>

                <FormGroup>
                    <label>Email</label>
                    <Input type="email"
                        placeholder="Email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block" type="submit">
                    Submit
                </Button>

                <div className='text-center' style={{color: 'blue'}}>{this.state.successMessage}</div>

                <div className="text-center pt-3 mb-3">
                    <a href="/">Back to Login screen</a>
                </div>
            </Form>
        )
    }
}