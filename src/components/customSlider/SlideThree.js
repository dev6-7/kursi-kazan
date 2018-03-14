import React, { Component } from 'react';

const SlideThree = (props) => {

    let background = {
        position: 'relative',
        backgroundImage: 'url(../components/123.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px'
    }

    return <div style={background} className="slide"></div>
}

export default SlideThree;