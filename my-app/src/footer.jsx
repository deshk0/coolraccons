import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Footer">
                <div className="Footer-container">
                    <div className="Footer-container-1">
                        <a className="Footer-container-1-href" href="/ourprojects">Интересные штуки</a>
                        <a className="Footer-container-1-href" href="/ourprojects">Мы во всей красе</a>
                        <a className="Footer-container-1-href" href="/ourprojects">Заказать</a>
                        <a className="Footer-container-1-href" href="/ourprojects">Штаб</a>
                        <a className="Footer-container-1-href" href="/ourprojects">О студии</a>
                    </div>
                    <div className="Footer-container-2">
                        <div className="Footer-container-2-1">
                            <a className="Footer-container-1-href-s" href="/ourprojects">Статьи</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Видео</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Новости</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Полезные штуки</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Шрифты</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Паттерны</a>
                        </div>
                        <div className="Footer-container-2-1">
                            <a className="Footer-container-1-href-s" href="/ourprojects">Наши работы</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Лого</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Сайты</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Брендинг</a>
                            <a className="Footer-container-1-href-s" href="/ourprojects">Видео</a>
                        </div>
                        <div className="Footer-container-2-3">
                            <div className="Footer-container-2-3-up">
                                <a className="Footer-container-2-3-up-box" href="/">
                                    <img src="/instagram-sketched.svg" className="Footer-container-2-3-up-box-ico" alt="ico"/>
                                </a>
                                <a className="Footer-container-2-3-up-box" href="/">
                                    <img src="/telegram.svg" className="Footer-container-2-3-up-box-ico" alt="ico"/>
                                </a>
                                <a className="Footer-container-2-3-up-box" href="/">
                                    <img src="/youtube.svg" className="Footer-container-2-3-up-box-ico" alt="ico"/>
                                </a>
                            </div>
                            <div className="Footer-container-2-3-down">
                                <div className="Footer-container-2-3-down-box">
                                    <div className="Footer-container-2-3-down-1-num">
                                        +380 50 735 60 22
                                    </div>
                                    <div className="Footer-container-2-3-down-1-email">
                                        photo.artist.v@gmail.com
                                    </div>
                                    <a href="/" className="Footer-container-2-3-down-1-inst">
                                        <img src="/instagram-sketched.svg" className="Footer-container-2-3-down-1-inst-ico" alt="ico"/>
                                    </a>
                                </div>
                                <div className="Footer-container-2-3-down-box">
                                    <div className="Footer-container-2-3-down-1-num">
                                        +380 50 753 14 08
                                    </div>
                                    <div className="Footer-container-2-3-down-1-email">
                                        deshko.dm@gmail.com
                                    </div>
                                    <a href="/" className="Footer-container-2-3-down-1-inst">
                                        <img src="/instagram-sketched.svg" className="Footer-container-2-3-down-1-inst-ico" alt="ico"/>
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="Footer-container-mobile">
                    <a href="/" className="Footer-container-mobile-href">Штаб</a>
                    <a href="/" className="Footer-container-mobile-href">Мы во всей красе</a>
                    <a href="/" className="Footer-container-mobile-href">Интерестные штуки</a>
                    <a href="/" className="Footer-container-mobile-href">О студии</a>
                    <a href="/" className="Footer-container-mobile-href">Заказать</a>
                    <div className="Footer-container-mobile-social-container">
                        <img src="/youtube.svg" className="Footer-container-mobile-social" />
                        <img src="/instagram-sketched.svg" className="Footer-container-mobile-social" />
                        <img src="/telegram.svg" className="Footer-container-mobile-social" />
                    </div>
                </div>
                <div id="CoolRaccoons">
                    2020 © Cool Raccoon’s
                </div>
            </div>
        )
    }
}