import React from 'react';

export class CallBackForm extends React.Component {

    sendPost() {
        let data = {phone: $('#phone').val(), name: $('#name').val()};
        fetch('/contact', {
            method: 'POST',
            body:  JSON.stringify(data),
            headers: new Headers({
                    'Content-Type': 'application/json'
                }
            )
        }).then(res => console.log(res.json()));
    }

    render() {
        return (
            <div id="callBackForm">
                <input type="text" id="name" name="name" placeholder="Имя" required/>
                <input type="text" id="phone" name="phone" placeholder="Номер телефона" required/>
                <a id='sendPostBtn' class='button' onClick={this.sendPost}>Отправить</a>
            </div>
        );
    }
}