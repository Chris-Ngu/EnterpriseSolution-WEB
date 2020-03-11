import React, { Component } from 'react';
import { getJWT } from './helpers/jwt';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Authenticate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        }
    }

    componentDidMount(){
        const jwt = getJWT() 
        if (!jwt){
            this.setState({
                user: null
            });
            return;
        }

        axios.get('/getUser/', {headers: { Authorization: `Bearer ${jwt}`} })
        .then(res => res.setState({
            user: res.data
        }))
        .catch(err => {
            localStorage.removeItem('JWT');
            this.props.history.push('/');
        });
    }

    render() {
        if(this.state.user === undefined){
            return (
                <div><h1></h1></div>
            );
        }

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Authenticate);