import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

import Login from "./components/Login.component";
import Register from "./components/Register.component";
import Forgot from "./components/Forgot.component";
import MainScreen from "./components/Main_Screen.component";
import Authenticate from "./components/Authenticate.component";
import Project from './components/MainScreen/Project.component'
import Message from './components/MainScreen/Message.component';
import Settings from './components/MainScreen/Settings.component';

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component= { Login }/>
        <Route path="/register" exact component = { Register }/>
        <Route path="/forgot" exact component = { Forgot } />
        <Authenticate>
        <Route path="/home" exact component = { MainScreen } />
        <Route path="/project" exact component = { Project } />
        <Route path="/message" exact component = { Message } />
        <Route path="/settings" exact component = { Settings } />
        </Authenticate>
      </div>
    </Router>
  )
}

export default App;