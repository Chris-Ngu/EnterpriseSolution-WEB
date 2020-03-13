import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { FormGroup, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

export default class Box extends Component {
    constructor(props) {
        super(props);

        this.onChangeProjName = this.onChangeProjName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMembers = this.onChangeMembers.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeFinishDate = this.onChangeFinishDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            projectname: '',
            description: '',
            members: '',
            startDate: new Date(),
            finishDate: new Date()
        }
    }

    onChangeProjName(e) {
        this.setState({
            projectname: e.target.value
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
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const proj = {
            projectname: this.state.projectname,
            description: this.state.description,
            members: this.state.members,
            startDate: this.state.startDate,
            finishDate: this.state.finishDate
        }
        console.log(proj);

        Axios.post('', proj)
        .then(res => console.log(res.data))
        this.state = {
            projectname: '',
            description: '',
            members: '',
            startDate: new Date(),
            finishDate: new Date()
        }
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
                        value={this.state.projectname}
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
            </Form>
        );
    }
}