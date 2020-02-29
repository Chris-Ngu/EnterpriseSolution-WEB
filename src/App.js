import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">Enterprise</span>Solution
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <label>Username</label>
          <Input type="text" placeholder="Username"/>
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Log in
        </Button>
        <div className="text-center pt-3 mb-3">
        <a href="/register">Register</a>
        <span className="p-2">|</span>
        <a href="/forgot">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

export default App;