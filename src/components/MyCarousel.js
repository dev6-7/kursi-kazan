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
                slide = {true}
                interval = {100}
                pauseOnHover = {true}
                wrap = {true}
                indicators = {true}
                controls = {true}
            >
                <Carousel.Item>
                    <img height={350} src="../img/learn.jpg" />
                    <Carousel.Caption>
                        <h3>Первый слайд</h3>
                        <p>Описание первого слайда</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350} src="../img/smKids/planets.png" />
                    <Carousel.Caption>
                        <h3>Второй слайд, с ссылкой</h3>
                        <a href={"https://vk.com/audios110949128"}>Вконтакте</a>
                        <p>Описание второго слайда</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350} src="../img/pencils.png" />
                    <Carousel.Caption>
                        <h3>Третий слайд</h3>
                        <p>Описание третьего слайда</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}