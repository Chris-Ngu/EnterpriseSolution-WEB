/*
    ERROR HANDLE USER INPUTS FOR EVENT BEFORE AXIOS RESPONSE

    Show existing created events
    Somehow detect which date is being selected(Nap function?)
    Save events to backend
    allow users to edit event
    show users event information
    create refresh function to component
*/

import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.submitNewEvent = this.submitNewEvent.bind(this);
        this.pullEventsFromDatabase = this.pullEventsFromDatabase.bind(this);

        this.titleChange = this.titleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.urgencyChange = this.urgencyChange.bind(this);
        this.dateChange = this.dateChange.bind(this);

        this.state = {
            modal: false,
            setModal: false,

            title: '',
            description: '',
            urgency: '',
            date: new Date()

        }

    }
    componentDidMount = () => {
        //Pull all events for the current MONTH, set it FullCalendar Dates property
        this.pullEventsFromDatabase();
    }

    handleDateClick = () => {
        this.setState({
            modal: !(this.state.modal)
        });
    }

    handleEventClick = (info) => {
        //modal showing event information
        alert('Event: ' + info.event.title);
    }

    submitNewEvent = () => {
        let newEvent = new Appointment("NAME HERE", this.state.title, this.state.date, this.state.description, this.state.urgency)



    }
    pullEventsFromDatabase = () => {
        //Axios response to pull all events from database
        //FullCalendar event attribute, call this function/ state to update
    }

    titleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    descriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    urgencyChange = (event) => {
        event.preventDefault(event);
        this.setState({
            urgency: event.target.value
        });
    }

    dateChange = (date) => {
        this.setState({
            date: date
        })
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
                                    <Input type="text" name="eventHeader" id="eventHeaderBox" placeholder="Title" onChange={this.titleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="description" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="descriptionBox" placeholder="Description" onChange={this.descriptionChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Urgency rating</Label>
                                <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect" value={this.state.urgency} onChange={this.urgencyChange}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="calendar" sm={2}>Date</Label>
                                <Col sm={10}>
                                    <DatePicker 
                                        selected={this.state.date}
                                        onChange={this.dateChange}
                                    />
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
    constructor(name, title, date, description, urgency) {
        this.name = name;
        this.title = title;
        this.date = date;
        this.description = description;
        this.urgency = urgency;
    }
}