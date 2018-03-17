import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import {Link} from "react-router-dom";

let eventKey = 0;
export class Menu extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem
                        eventKey={eventKey}>
                        <Link to='/'> ГЛАВНАЯ</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem
                        eventKey={++eventKey}>
                        <Link to='/'> КУРСЫ</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem
                        eventKey={++eventKey}>
                        <Link to='/request'> ЗАЯВКА</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem
                        eventKey={++eventKey}>
                        <Link to='/contact'> КОНТАКТЫ</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}