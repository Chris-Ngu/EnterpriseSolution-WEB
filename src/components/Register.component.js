import React, { Component } from 'react';
//import { BrowserRouter as router, Route, link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Axios from 'axios';
//import a registration checker here

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            errorMessage: '',
            errorState: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({ errorState: false })
        const checking = {
            name: this.state.username
        }

        //for some reason this doesn't set the state of the errorstate or message, but does render the text
        //Async calls most likely causing this
        Axios.post('http://localhost:5000/admin/checkIfUserExists', checking)
            .then(response => {
                this.setState({
                    errorState: true,
                    errorMessage: "User already exists, please try a different username"
                })
            })

        if (this.state.errorState === false) {
            const user = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            };

            Axios.post('http://localhost:5000/admin/add', user)
                .then(res => console.log(res.data));

            this.setState({
                username: '',
                password: '',
                email: '',
                errorMessage: ''
            });
            //window.location = '/';
        }
    }

    render() {
        return (
            <Form className="register-form" onSubmit={this.onSubmit}>
                <h1>
                    <center><span className="font-weight-bold">Registration</span>Form</center>
                </h1>
                <h2 className="text-center">Please enter the required fields</h2>
                <FormGroup>
                    <label>Username*</label>
                    <Input type="text"
                        placeholder="Username"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Email*</label>
                    <Input type="email"
                        placeholder="Email@example.com"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Password*</label>
                    <Input type="password"
                        placeholder="⚈⚈⚈⚈⚈"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required minLength={5}
                        pattern="(?=.*\d)(?=.*[a-z]).{5,}" title="Must contain at least one number and letter"
                    />
                </FormGroup>
                <div className="text-center" style={{ color: 'red' }}>{this.state.errorMessage}</div>
                <Button className="btn-lg btn-dark btn-block" onClick={this.onSubmit}>
                    Submit
                    </Button>
                <div className="text-center pt-3 mb-3">
                    <a href="/">Back to Login screen</a>
                </div>
            </Form>
        )
    }
}