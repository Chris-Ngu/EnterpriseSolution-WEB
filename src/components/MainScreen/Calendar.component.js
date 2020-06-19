/*
    Save events to JSON
    allow users to edit event
    show users event information
    create refresh function to component
*/

import Navbar from '../Navbar.component';
import React, { Component } from 'react';

import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    handleEventClick = () => {
        //Allow user to create an event here
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
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                    events={
                        [
                            { title: 'TEST', date: '2020-06-18' },
                        ]
                    }

                />
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