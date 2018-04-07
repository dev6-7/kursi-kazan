import React, { Component } from 'react'

import '../styles/app.less'
import '../styles/footer.less'
import {Menu} from "./Menu"
import {Footer} from "./Footer";
import {Main} from "./Main";
import {Header} from "./Header";
import {MyCarousel} from "./MyCarousel";

export class App extends Component {

    render () {
        return (
            <div>
                <Header/>
                <MyCarousel/>
                <div id="menu">
                    <Menu/>
                </div>
                <Main/>
                <Footer/>
            </div>
        )
    }

}