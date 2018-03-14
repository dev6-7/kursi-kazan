import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            Планета знаний
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                {/*<Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem
                            eventKey={1}
                            href="#">
                            <Glyphicon glyph={"home"}/>
                            {' Главная'}
                        </NavItem>
                        <NavItem
                            eventKey={2}
                            href="#">
                            <Glyphicon glyph="modal-window" />
                            {' Заявка'}
                        </NavItem>
                        <NavItem
                            eventKey={3}
                            href="#">
                            <Glyphicon glyph="list" />
                            {' Контакты'}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>*/}
            </Navbar>
        );
    }
}