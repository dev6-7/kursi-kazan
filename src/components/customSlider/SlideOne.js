import React, { Component } from 'react';

const SlideOne = (props) => {
    let background = {
        position: 'relative',
        backgroundImage: 'url(../components/learn.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px'
    }
    return (<div style={background} className="slide"></div>)
}

export default SlideOne;