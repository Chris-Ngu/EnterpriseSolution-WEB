
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';

const Example = (props) => {
    const [settingDropdownOpen, setOpen] = useState(false);
    const settingToggle = () => setOpen(!settingDropdownOpen);

    const [messageDropdownOpen, messageSetOpen] = useState(false);
    const messageToggle = () => messageSetOpen(!messageDropdownOpen);

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/home" className="navbar-brand">EnterpriseSolution</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/project" className="nav-link">Projects</Link>
                    </li>
                    <ButtonDropdown isOpen={messageDropdownOpen} toggle={messageToggle}>
                        <DropdownToggle caret>
                            Messaging
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/message">
                                    Enterprise Messaging
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/external">
                                    External Messanger
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <li className="navbar-item">
                        <Link to="/calendar" className="nav-link">Calender</Link>
                    </li>
                    <ButtonDropdown isOpen={settingDropdownOpen} toggle={settingToggle}>
                        <DropdownToggle caret>
                            Settings
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/settings">
                                    User Settings
                            </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/management">
                                    Admin Management
                            </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
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
