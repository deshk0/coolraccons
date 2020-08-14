import React from 'react';
import ReactDOM from 'react-dom';
import { Form, OurSocialMedia } from './HomePage';


export class AboutUs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="Wrapper">
                <div className="AboutUs-block">
                    <div className="AboutUs-block-title">
                        Дизайн-студия<br />
                        «Cool Raccoon’s»
                    </div>
                    <div className="AboutUs-block-desc">
                        Здравствуйте! Мы – дизайн-студия «Cool Raccoons». Уже <br />
                        более 2-х лет мы создаем дизайны для сайтов, верстаем их,<br />
                        делаем логотипы, айдентику и полный брендинг. Так же мы<br />
                        создаем макеты для социальных сетей. Что бы посмотреть<br />
                        наши работы, советуем Вам посетить вкладку <br />
                        <a href="http://localhost:3000/ourworks" className="AboutUs-block-desc-href">«Мы во всей красе»</a>, или посмотреть наши соц. сети.
                    </div>
                </div>
                <div className="AboutUs-block">
                    <div className="AboutUs-block-title">Наши цели</div>
                    <div className="AboutUs-block-desc">
                        Наша студия преследует две цели: сделать красиво<br />
                        и сделать уникально. Качественно сделанная работа, которая <br />
                        приносит пользу заказчику и наслаждение его клиенту – это<br />
                        то, к чему мы стремимся в каждом нашем проекте. 
                    </div>
                </div>
                <div className="AboutUs-block">
                    <div className="AboutUs-block-title">
                        Преимущества наших<br />
                        сайтов
                    </div>
                    <div className="AboutUs-block-desc">
                        Так как мы создаем дизайн и разрабатываем сайт с нуля, <br />
                        а не на конструкторе, то он получается максимально<br />
                        уникальным, запоминающимся, эффективным и конкурентоспособным.<br />
                        Благодаря этому мы можем воплотить в жизнь абсолютно любые желания <br />
                        и требования. Такие сайты намного лучше продвигаются в гугле, а также,<br />
                        из-за своей уникальности, запоминаются 
                    </div>
                    </div>
                <div className="AboutUs-block">
                    <div className="AboutUs-block-title">Уникальные логотипы</div>
                    <div className="AboutUs-block-desc">
                        Логотип – лицо Вашего бизнеса. Именно поэтому так важно,<br />
                        что бы он был сделан качественно и уникально. Мы создаем<br />
                        максимально запоминающиеся и уникальные логотипы, <br />
                        выстраивая ассоциативный ряд, мы помогаем покупателю <br />
                        лучше запомнить Ваш бренд и в будущем, что бы при <br />
                        потребности в вашем товаре или услуге, у клиента в голове<br />
                        сразу “всплывал” Ваш лого.
                    </div>
                </div>
                <div className="AboutUs-block">
                    <div className="AboutUs-block-title">Множество проектов</div>
                    <div className="AboutUs-block-desc">
                        Наша студия, помимо всех услуг, создает уникальный <br />
                        и интересный контент, посмотреть который Вы можете на <br />
                        наших ютуб каналах, в инстаграммах, телеграмм канале и на <br />
                        нашем сайте. Все новые статьи, видео, фото появляются на <br />
                        нашем сайте во вкладке <a href="http://localhost:3000/ourprojects" className="AboutUs-block-desc-href">«Интересные штуки»</a>.
                    </div>
                </div>
                <Form />
                <OurSocialMedia />
            </div>
        )
    }
}