import React from 'react';

export class CallBackForm extends React.Component {

    btnTapped() {
        fetch('/contact', {method: 'post'})
            .then(res => res.json());
    }

    render() {
        return (
            <div id="callBackForm">
                <input type="text" id="name" name="name" placeholder="Имя" required/>
                <input type="text" id="phone" name="phone" placeholder="+7 (937) 5229091" required/>
                <button id='myButtonClick' onClick={this.btnTapped}>Отправить</button>
            </div>
        );
    }
}