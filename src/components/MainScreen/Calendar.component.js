/*
    Allow user input for event creation
    possibly show events with modal window

    Save events to backend
    allow users to edit event
    show users event information
    create refresh function to component
*/

import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

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

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        Create Event
                        Please fill in the information below
                    </ModalHeader>

                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <label for="firstName">First Name</label>
                                        <Input type="text" name="text" id="firstNameBox" placeholder="John" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.submitNewEvent}>Do Something</Button>
                        <Button color='secondary' onClick={this.handleDateClick}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

class Appointment {
    constructor(name, date, description) {
        this.name = name;
        this.date = date;
        this.description = description;
    }
}