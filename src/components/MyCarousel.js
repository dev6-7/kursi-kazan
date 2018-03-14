import React from 'react';

import { Carousel, CarouselItem } from 'react-bootstrap';

export class MyCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        /*alert(`selected=${selectedIndex}, direction=${e.direction}`);*/
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img height={350} src="../img/learn.jpg" />
                    <Carousel.Caption>
                        <h3>Первый слайд</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350} src="../img/learn.jpg" />
                    <Carousel.Caption>
                        <h3>Второй слайд</h3>
                        <a href={"https://vk.com/audios110949128"}>Вконтакте</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350} src="../img/learn.jpg" />
                    <Carousel.Caption>
                        <h3>Третий слайд</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}