import React, { Component } from 'react'

export class Contact extends Component {
    render () {
        return (
            <div id="contact">
                <p><strong>Основной Адрес: г.Казань, ул. Баки Урманче д.7, 2 этаж, оф.1218</strong></p>
                <p><strong>Режим работы офиса: понедельник - пятница - с 9.00 до 20.00. Без выходных.</strong></p>

                <p><strong>Наши телефоны: +7(965)5822525, +7(960)0407575</strong></p>
                <p><strong><a href="https://vk.com/planeta_znanii_kzn">Группа вконтакте: https://vk.com/planeta_znanii_kzn</a></strong></p>
                <p><strong><a href="mailto:ucplaneta70@mail.ru">Ждём ваших писем: ucplaneta70@mail.ru</a></strong></p>
                <iframe src="https://yandex.ru/map-widget/v1/-/CBebUTTcCC" width="100%" height="400" frameborder="0"></iframe>
            </div>
        )
    }

}