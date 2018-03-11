import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            Планета знаний
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem
                            eventKey={1}
                            href="#">
                            Home
                        </NavItem>
                        <NavItem
                            eventKey={2}
                            href="#">
                            Shop
                        </NavItem>
                        <NavItem
                            eventKey={3}
                            href="#">
                            <Glyphicon glyph="shopping-cart" />
                            {' Cart'}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}