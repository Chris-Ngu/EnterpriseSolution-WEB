import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import Box from './Project.box';
import Navbar from '../Navbar.component';

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.displayProjects = this.displayProjects.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getProjects = this.getProjects.bind(this);

        this.state = {
            show: false,
            projects: []
        }
    }
    componentDidMount = () => {
        this.getProjects();
    }

    displayProjects = (projects) => {
        if (!projects.length) return null;
        return projects.map((project, index) => (

            <div key={index}>
                <h3>{project.projName}</h3>
                <h>Created User</h>
                <p>{project.createduser}</p>
                <h>Description:</h>
                <p>{project.description}</p>
                <h>Participating Members:</h>
                <p>{project.members}</p>
                <h>Start date</h>
                <p>{project.startdate}</p>
                <h>Finish date</h>
                <p>{project.finishdate}</p>

            </div>
        ))
    }

    getProjects = () => {
        axios.get('http://localhost:5000/project')
            .then((response) => {
                const data = response.data;
                this.setState({
                    projects: data
                })
                console.log('Getting data')
            })
            .catch(() => {
                alert('Error collecting project data')
            })
    }

    toggle = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    render() {
        return (
            <div>
                <Navbar />
                <h2>Current Projects</h2>
                <div className="Projects">
                    {this.displayProjects(this.state.projects)}
                </div>

                <div className="SubmitRequest">
                    <Box />
                </div>
            </div>
        );
    }
}
