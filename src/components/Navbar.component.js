
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/home" className="navbar-brand">EnterpriseSolution</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            ButtonDropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

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
                        <Link to="/calendar" className="nav-link">Calender</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/management" className="nav-link">Management</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/external" className="nav-link">External Messanger</Link>
                    </li>
                    <div className="pull-right">
                        <li className="navbar-item-right" >
                            <Link to="/" className="nav-link" onClick={() => {
                                localStorage.removeItem('JWT')
                            }}>
                                Logout
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Example;
