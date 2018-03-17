import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div id="pageHeader">
                <div id="logoTail">
                    <img src="../img/ico/planet.png" width={32} height={32}/>
                    <span>Планета знаний</span>
                </div>
                <div id="hrefTail">
                    <p>
                        <img src="../img/ico/phone26.ico" width={32} height={32}/>
                        <span>+7 (965) 5822525 &nbsp;&nbsp; +7 (960) 0407575</span>
                        <a href="https://vk.com/planeta_znanii_kzn">
                            <img src="../img/ico/vk32px.ico"/>
                        </a>
                        <a href="https://www.instagram.com/planeta_znanii_kzn/">
                            <img src="../img/ico/insta32px.ico"/>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}