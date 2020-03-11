import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavBar, Badge } from 'react-bootstrap';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">EnterpriseSolution</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/project" className="nav-link">Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/message" className="nav-link">Messages</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
            /*
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/messaging">Messaging<badge className="badge">999</badge></Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/settings">Settings</NavItem>
                        <NavItem eventKey={1} href="/Logout">Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */
