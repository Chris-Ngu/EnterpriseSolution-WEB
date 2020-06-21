/*
    Connect values to actual form (update values, current state holding value, add value to datepicker component)
    Show existing created events

    Save events to backend
    allow users to edit event
    show users event information
    create refresh function to component
*/

import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            setModal: false,

            title: '',
            description: '',

        }

    }

    handleDateClick = () => {
        this.setState({
            modal: !(this.state.modal)
        });
    }
    handleMouseHover = () => {

    }

    handleEventClick = (info) => {
        //modal showing event information
        alert('Event: ' + info.event.title);
    }
    componentDidMount = () => {
        //call component refresh
    }
    handleEventClick = () => {
        //Show information about the event
    }

    submitNewEvent = () => {
        //Error handle user inputs

    }

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <FullCalender
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                    events={
                        [
                            { title: 'TEST', date: '2020-06-18' },
                        ]
                    }

                />

                <Modal isOpen={this.state.modal} size="lg">
                    <ModalHeader>
                        Create Event <br />
                        Please fill in the information below
                    </ModalHeader>

                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="eventHeader" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input type="text" name="eventHeader" id="eventHeaderBox" placeholder="Title" />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="description" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="descriptionBox" placeholder="Description" />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Urgency rating</Label>
                                <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="calendar" sm={2}>Date</Label>
                                <Col sm={10}>
                                    <DatePicker />
                                </Col>
                            </FormGroup>

                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.submitNewEvent}>Submit Event</Button>
                        <Button color='secondary' onClick={this.handleDateClick}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

class Appointment {
    constructor(name, date, description, urgency) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.urgency = urgency;
    }
}