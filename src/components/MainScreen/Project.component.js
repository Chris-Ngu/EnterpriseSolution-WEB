import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import Box from './Project.box';

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            show: false,
        }

    }
    getProjects = () => {
        axios.get('http://localhost:5000/')
            .then(() => {
                console.log('Getting data')
            })
            .catch(() => {
                ("Error")
            })
    }

    toggle = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    render() {
        return (


            <div className="SubmitRequest">
                <Box />
            </div>
        );
    }
}
