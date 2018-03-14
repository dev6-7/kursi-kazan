import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import {Link} from "react-router-dom";

export class Menu extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem
                        eventKey={1}>
                        <Link to='/'> ГЛАВНАЯ</Link>
                    </NavItem>
                    <NavItem
                        eventKey={2}>
                        <Link to='/request'> ЗАЯВКА</Link>
                    </NavItem>
                    <NavItem
                        eventKey={3}>
                        <Link to='/contact'> КОНТАКТЫ</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}