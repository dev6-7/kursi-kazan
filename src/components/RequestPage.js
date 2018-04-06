import React, { Component } from 'react'
import {CallBackForm} from "./CallBackForm";

export class RequestPage extends Component {
    render () {
        return (
            <div className={"callBackForm"}>
                <h3>СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС</h3>
                <CallBackForm/>
            </div>
        )
    }
}