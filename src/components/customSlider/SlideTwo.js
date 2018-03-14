import React, { Component } from 'react';

const SlideTwo = (props) => {
    let background = {
        position: 'relative',
        backgroundImage: 'url(../components/znanie.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px'
    }
    return <div style={background} className="slide"></div>
}

export default SlideTwo;