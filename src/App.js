import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

import Login from "./components/Login.component";

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component= { Login }/>
      </div>
    </Router>
  )
}

export default App;