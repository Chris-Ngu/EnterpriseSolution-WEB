import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
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

            <div className="project">
                <div key={index}>
                    <Jumbotron className="bg-transparent">
                        <h1 classname="display-3">{project.projName}</h1>
                        <b>Submitted member: {project.createduser}</b>
                        <p classname="lead">Objective: {project.description}</p>
                        <p>Start date: {project.startdate.substring(0, 10)}{' | '}End date: {project.finishdate.substring(0, 10)}</p>
                        <p>Participating parties: {project.members}</p>
                        <p className="lead">
                            <Button color="success">Upvote</Button>{' '}
                            <Button color="danger">Downvote</Button>
                        </p>
                        <hr className="pageBreak" />
                    </Jumbotron>

                </div>
            </div>
        ))
    }
    /*
                <h>Created User</h>
                <p>{project.createduser}</p>


    */

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
                <h2 className="projectHeader">Projects</h2>
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
