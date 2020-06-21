/*
    Allow user input for event creation

    Save events to JSON
    allow users to edit event
    show users event information
    create refresh function to component
*/

import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            setModal: false
        }

    }

    handleDateClick = () => {
        this.setState({
            modal: !(this.state.modal)
        });
    }

    handleEventClick = () => {
        //modal showing event information
    }
    componentDidMount = () => {
        //call component refresh
    }
    handleEventClick = () => {
        //Show information about the event
    }

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <FullCalender
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    editable={true}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                    events={
                        [
                            { title: 'TEST', date: '2020-06-18' },
                        ]
                    }

                />

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Create Event</ModalHeader>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleDateClick}>Do Something</Button>{' '}
                        <Button color='secondary' onCLick={this.handleDateClick}>Cancel</Button>
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