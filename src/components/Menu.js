import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from "react-router-dom";

export class Menu extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem>
                        <Link to='/'> ГЛАВНАЯ</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem>
                        <Link to='/kursi'> КУРСЫ</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem>
                        <Link to='/request'> ЗАЯВКА</Link>
                    </NavItem>
                    <span>|</span>
                    <NavItem>
                        <Link to='/contacting'> КОНТАКТЫ</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}