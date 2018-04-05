import React, { Component } from 'react'

import {Grid, Row, Col, Image, Panel, Button} from 'react-bootstrap';
import {Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";
import {Contact} from "./Contact";
import {MainPage} from "./MainPage";

export class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path={'/'} render={()=>(
                        <MainPage/>
                    )}/>
                    <Route path={'/contacting'} component={Contact}/>

                    TODO добавить когда появятся страницы
                    {/*<Route path={'/request'} component={Contact}/>
                    <Route path={'/kursi'} component={Contact}/>*/}
                </Switch>
            </main>
        )
    }

}