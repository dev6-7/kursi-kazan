import React, { Component } from 'react'

import {Grid, Row, Col, Image, Panel, Button} from 'react-bootstrap';
import {Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";
import {Contact} from "./Contact";

export class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path={'/'} render={()=>(
                        <div id="welcomeText">
                            <p><strong>Образовательный семейный центр “Планета знаний” поможет Вам обрести раскрыть свои навыки и творческие способности, открыть собственный бизнес, почувствовать себя увереннее в завтрашнем дне. Мы верим что: современные методы обучения; квалифицированные, педагоги-практики; современные, технически оснащенные аудитории; внимательный и дружный коллектив образовательного семейного центра “Планета Знаний” поможет Вам в этом!</strong></p>
                            <p><strong>C уважением, коллектив образовательного семейного центра “Планета Знаний”</strong></p>

                            <p><strong>Мы ценим Ваше доверие!</strong></p>
                        </div>
                    )}/>
                    <Route path={'/contact'} component={Contact}/>
                </Switch>
            </main>
        )
    }

}