import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { ButtonGroup, FormGroup } from 'react-bootstrap';

import Box from './Project.box';

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        
        this.state = {
            show: false,
        }

    }

    toggle = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    render() {
        return (
            <ButtonGroup>
                <Button color="link" onClick={this.toggle}>
                    Submit project
                    {this.state.show && <Box />}
                </Button>
            </ButtonGroup>
        );
    }
}
