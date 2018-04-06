import React, { Component } from 'react'

import {Route, Switch} from "react-router-dom";
import {Contact} from "./Contact";
import {MainPage} from "./MainPage";
import {Kurses} from "./Kurses";
import {RequestPage} from "./RequestPage";

export class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path={'/'} render={()=>(
                        <MainPage/>
                    )}/>
                    <Route path={'/contacting'} component={Contact}/>
                    <Route path={'/request'} component={RequestPage}/>
                    <Route path={'/kursi'} component={Kurses}/>
                </Switch>
            </main>
        )
    }

}