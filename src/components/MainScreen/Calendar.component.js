import Navbar from '../Navbar.component';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Axios = require('axios');

export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    formatEvents() {
        //refer to dev.to full calendar react blog
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
                    //eventDrop={this.handleEventDrop}
                    //eventClick={this.handleEventClick}
                    //events={
                    //    this.formatEvents()
                   // }

                />
            </div>
        )
    }
}