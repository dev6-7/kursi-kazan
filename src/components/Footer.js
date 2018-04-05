import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import {Link} from "react-router-dom";

export class Footer extends React.Component {
    render() {
        return(
            <footer>
                <Grid>
                    <Nav justified>
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
                            <Link to='/contacting'> КОНТАКТЫ</Link>
                        </NavItem>
                    </Nav>

                    <div className="footer text-center small copyright">
                        Наши телефоны: +7 (965) 5822525, +7 (960) 0407575 <br/>
                        Адрес: г. Казань, ул. Баки урманче, д.7, 2 этаж, оф.1218 <br/>
                        © Планета знаний 2018
                    </div>
                </Grid>
            </footer>
        )
    }
}