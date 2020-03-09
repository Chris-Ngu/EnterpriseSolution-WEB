import React, { Component } from 'react';
import { BrowserRouter as router, Route, link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        console.log(user);
        Axios.post('http://localhost:5000/admin/login', user);
        this.setState({
            username: '',
            password: ''
        });
        //
       
    }

    render() {
        return (
            <Form className="login-form">
                <form onSubmit={this.onSubmit}>
                    <h1>
                        <center><span className="font-weight-bold">Enterprise</span>Solution</center>
                    </h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormGroup>
                        <label>Username</label>
                        <Input type="text"
                            placeholder="Username"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <Input type="password"
                            placeholder="Password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" type="submit">
                        Log in
                    </Button>
                    <div className="text-center pt-3 mb-3">
                        <a href="/register">Register</a>
                        <span className="p-2">|</span>
                        <a href="/forgot">Forgot Password</a>
                    </div>
                </form>
            </Form>
        )
    }
}