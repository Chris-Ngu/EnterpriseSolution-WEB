import React, {Component} from "react";
const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');

/*
Admin access to mongodb
messager settings/ preferences (do not disturb, etc...)
Color preferences of website (CSS Choices)
=====Change email option
=====change password option
=====change profile picture
=====Date registered
=====Name
Request queue(Class wrapper)
    -Requested user
    -date
    -Ticker number
Show profile picture
*/
export default class Settings extends Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            object: null
        }
    }
    componentDidMount = () => {
        this.getToken();
    }
    getToken = () =>{
        const userToken = localStorage.getItem("JWT");
        if (!userToken) return alert('No web token found');


        //
        //
        //
        //
        //remove secret key
        jwt.verify(userToken, "PPwU!!!SH$F%m9dVn!BAS", function (err, decoded){
            if (err){
                console.log('ERROR: ' + err)
                return;
            }
            this.state = decoded;
        }); 
    }

    render(){
        return(
            <h1>{SettingTest}</h1>
        );
    }
}
