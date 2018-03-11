import React, { Component } from 'react'

export class Topic extends Component {

    render () {
        return (
            <p>
                {this.props.text}
            </p>
        )
    }
}