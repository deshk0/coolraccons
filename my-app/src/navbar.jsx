import React from 'react';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Navbar">
                <div className="Navbar-container">
                    <a style={{backgroundColor:`${document.location.href === 'http://localhost:3000/' ? 'black' : 'transperent'}`}}className="Navbar-container-href" href="/">Штаб</a>
                    <a style={{backgroundColor:`${document.location.href === 'http://localhost:3000/ourworks' ? 'black' : 'transperent'}`}}className="Navbar-container-href" href="/ourworks">Мы во всей красе</a>
                    <a style={{backgroundColor:`${document.location.href === 'http://localhost:3000/ourprojects' ? 'black' : 'transperent'}`}}className="Navbar-container-href" href="/ourprojects">Интерестные штуки</a>
                    <a style={{backgroundColor:`${document.location.href === 'http://localhost:3000/aboutus' ? 'black' : 'transperent'}`}}className="Navbar-container-href" href="/aboutus">О студии</a>
                    <a style={{backgroundColor:`${document.location.href === 'http://localhost:3000/form' ? 'black' : 'transperent'}`}}className="Navbar-container-href" href="/form">Заказать</a>
                </div>
            </div>
        )
    }
}