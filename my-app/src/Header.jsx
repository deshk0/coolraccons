import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component{
    constructor(){
        super()
    }
    onClick1(e){
        console.log('hello')
        e.preventDefault()
        const opa1 = document.getElementById("opa")
        const opa = document.getElementById("opa1")
        const opa2 = document.getElementsByClassName("NavbarMobile-burgermenu-link")

        const className1 = "burgerMenu-button_active"
        const className2 = "NavbarMobile-burgermenu-link_active"
        const className = "NavbarMobile-burgerMenu-block_active"
        
        opa.classList.toggle(className)
        opa1.classList.toggle(className1)
        opa2[0].classList.toggle(className2)
        opa2[1].classList.toggle(className2)
        opa2[2].classList.toggle(className2)
        opa2[3].classList.toggle(className2)
        opa2[4].classList.toggle(className2)
    }

    render(){
        return(
            <div id="Header">
                <a className="Header-logo" href="/">
                    <img className="Header-logo-img" alt="logo" src="/CR-logo-white-m.svg" />
                </a>
                <div id="opa1" className="NavbarMobile-burgerMenu-block">
                    <div  className="NavbarMobile-burgerMenu">
                        <a id="opa" onClick={this.onClick1.bind(this)} href="#" className="burgerMenu-button">
                            <span className="burgerMenu-button-span">
                            </span>
                        </a>
                    </div>
                    <a className="NavbarMobile-burgermenu-link" href="https://coolraccoons.com.ua">Штаб</a>
                    <a className="NavbarMobile-burgermenu-link" href="https://coolraccoons.com.ua/ourworks">Мы во всей красе</a>
                    <a className="NavbarMobile-burgermenu-link" href="https://coolraccoons.com.ua/ourprojects">Интерестные штуки</a>
                    <a className="NavbarMobile-burgermenu-link" href="https://coolraccoons.com.ua/aboutus">О студии</a>
                    <a className="NavbarMobile-burgermenu-link" href="https://coolraccoons.com.ua/form">Заказать</a>
                </div>
            </div>
        )
    }
}