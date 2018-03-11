import React, { Component } from 'react'

import {Header} from "./Header"
import '../styles/app.less'
import {Footer} from "./Footer";

export class App extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }

}