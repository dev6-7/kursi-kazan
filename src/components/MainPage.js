import React from 'react';
import {MainPageTable} from "./MainPageTable";
import {DivBlock} from "./DivBlock";
import {CallBackForm} from "./CallBackForm";

export class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div id="welcomeText">
                    <p>Образовательный семейный центр “Планета знаний” поможет Вам обрести раскрыть свои навыки и творческие способности, открыть собственный бизнес, почувствовать себя увереннее в завтрашнем дне. Мы верим что: современные методы обучения; квалифицированные, педагоги-практики; современные, технически оснащенные аудитории; внимательный и дружный коллектив образовательного семейного центра “Планета Знаний” поможет Вам в этом!</p>
                    <p>C уважением, коллектив образовательного семейного центра “Планета Знаний”</p>

                    <p>Мы ценим Ваше доверие!</p>
                </div>
                <DivBlock/>
                <div className={"callBackForm"}>
                    <h3>СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС</h3>
                    <CallBackForm/>
                </div>

                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}