import React from 'react';

import { Carousel, CarouselItem } from 'react-bootstrap';

export class MyCarousel extends React.Component {

    render() {

        return (
            <Carousel>
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