import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { FormGroup, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

const jwt = require('jsonwebtoken');

export default class Box extends Component {
    constructor(props) {
        super(props);

        this.onChangeProjName = this.onChangeProjName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMembers = this.onChangeMembers.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeFinishDate = this.onChangeFinishDate.bind(this);
        this.getUser = this.getUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            projName: '',
            description: '',
            members: '',
            startdate: new Date(),
            finishdate: new Date(),
            createduser: ''
        }
        
    }
    getUser(){
        //Get username portion of JWT
        const userToken = localStorage.getItem("JWT");
        if (!userToken) return alert('No web token found');

        //
        //
        //
        //
        //
        //remove secret key
        const decoded = jwt.verify(userToken, "PPwU!!!SH$F%m9dVn!BAS");
        this.state.createduser = decoded.name;
    }

    onChangeProjName(e) {
        this.setState({
            projName: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeMembers(e) {
        this.setState({
            members: e.target.value
        });
    }
    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }
    onChangeFinishDate(date) {
        this.setState({
            finishDate: date
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.getUser();
        const proj = {
            projName: this.state.projName,
            description: this.state.description,
            members: this.state.members,
            startdate: this.state.startDate,
            finishdate: this.state.finishDate,
            createduser: this.state.createduser
        };
        console.log(proj);

        Axios.post('http://localhost:5000/project/add', proj)
            .then(res => console.log(res.data))
            .catch((error) => console.log(error.response.request._response))

        this.setState({
            projName: '',
            description: '',
            members: '',
            startDate: new Date(),
            finishDate: new Date(),
            createduser: ''
        });
        //after fixing the popup form, maybe hide this section or use flash for a message
    }

    render() {
        return (
            <Form className="Project-form" onSubmit={this.onSubmit}>
                <FormGroup>
                    <label>Proj Name</label>
                    <Input type="text"
                        placeholder="Title"
                        required
                        className="form-control"
                        value={this.state.projName}
                        onChange={this.onChangeProjName}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Description</label>
                    <Input type="text"
                        placeholder="Description"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Members</label>
                    <Input type="textarea"
                        placeholder="John Smith"
                        required
                        className="form-control"
                        value={this.state.members}
                        onChange={this.onChangeMembers}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Start date</label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.onChangeStartDate}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Finish date</label>
                    <DatePicker
                        selected={this.state.finishDate}
                        onChange={this.onChangeFinishDate}
                    />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" type="submit">
                    Create Project
                </Button>
            </Form>
        );
    }
}