import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { ButtonGroup, FormGroup } from 'react-bootstrap';

export default class Box extends Component {
    constructor(props){
        super(props);

        this.onChangeProjName = this.onChangeProjName.bind(this);
        this.state = {
            projectname: '',
        }
    }
    onChangeProjName(e) {
        this.setState({
            projectname: e.target.value
        });
    }

    render() {
        return (
            <FormGroup>
                <label>Proj Name</label>
                <Input type="text"
                    placeholder="Title"
                    required
                    className="form-control"
                    value={this.state.projectname}
                    onChange={this.onChangeProjName}
                />
            </FormGroup>
        );
    }
}