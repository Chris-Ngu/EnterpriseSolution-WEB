import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Input, Button } from 'reactstrap';

export default class Message extends Component {
    render() {
        return (
            <body>
                <div id="message-container">
                    <Form id="send-container">
                        <Input type="text" id="message-input" />
                        <Button type="submit" id="send-button" className="btn-lg btn-dark btn-block">
                            Send
                        </Button>
                    </Form>
                </div>
            </body>
        );
    }
}