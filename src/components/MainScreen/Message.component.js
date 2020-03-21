import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Input, Button } from 'reactstrap';

export default class Message extends Component {
    render() {
        return (
            <body>
                <script defer src="http://localhost:6000/socket.io/socket.io.js"></script>
                <script defer src="/backend/messageScript.js"></script>
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