import React from 'react';
import ReactDOM from 'react-dom';

export class HomePage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <div className="Wrapper">
                    <Main />
                </div>
                <OurAdvantages />
                <OurAdvantagesMobile />
                <Quote />
                <QuoteMobile />
                <Articles />
                <OurServices />
                <SpecialOffer />
                <Form />
                <OurSocialMedia />
            </div>
        )
    }
}

class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            text: 
                [
                    'Привет, человек посетивший наш сайт!',
                    'Раз уж ты попал к нам, то наверняка тебе нужен сайт или услуги дизайна.',
                    'Нажимай на кнопку "Поехали!", чтобы начать экскурсию по сайту!'
                ],
            index: 0,
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
            this.setState({
                index: this.state.index + 1
            })
        }
        if(this.state.index === 1){
            const button = document.getElementsByClassName('HomePage-Header-container-text-1-button')
            const style = 'HomePage-Header-container-text-1-button_active'

            button[0].classList.add(style)
            button[1].classList.add(style)

        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1
            })
        }
        if(this.state.index <= 2){
            const button = document.getElementsByClassName('HomePage-Header-container-text-1-button')
            const style = 'HomePage-Header-container-text-1-button_active'

            button[0].classList.remove(style)
            button[1].classList.remove(style)
        }
    }
    onClick(e){
        e.preventDefault()

        function scrollToTop(){
            let timer = setTimeout(scrollToTop, 15)
            let scrolled = window.pageYOffset

            if(scrolled <= 910){
                scrolled = scrolled + 100
                window.scrollTo(0, scrolled)
            }else{
                clearTimeout(timer)
            }

        }
        scrollToTop()
    }


    render(){
        return(
            <div  id="HomePage-Header">
                <div className="Wrapper">
                    <div className='HomePage-Header-container'>
                        <div className='HomePage-Header-headline'>
                            Cool Raccoon<span style={{fontFamily:'roboto',fontWeight:'lighter'}}>`</span>s
                        </div>
                        <h1 className='HomePage-Header-desc'>
                            Разработка сайтов. Создание логотипов. Айдентика. Брендинг и фирменый стиль.<br />
                            Создание Landing page. Корпаративных сайтов. Сайты визитки.<br />
                            Упаковка бизнеса и визуальное оформление
                        </h1>
                        <div className="HomePage-Header-container-text">
                            <a onClick={this.prev = this.prev.bind(this)} href="/" className="HomePage-Header-container-text-button">←</a>
                                <div className="HomePage-Header-container-text-box">
                                    <div className="HomePage-Header-container-text-1">
                                        {this.state.text[this.state.index]}
                                        <div className="HomePage-Header-container-button-box">
                                        <a onClick={this.onClick = this.onClick.bind(this)} className="HomePage-Header-container-text-1-button" href="/">
                                            Поехали!<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                                        </a>
                                        <a className="HomePage-Header-container-text-1-button" href="/form">
                                            Заказать<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            <a onClick={this.next = this.next.bind(this)} href="/" className="HomePage-Header-container-text-button">→</a>
                        </div>
                        <div className="HomePage-Header-container-mobile">
                            <a className="HomePage-Header-container-text-1-button" href="/form">
                                Заказать<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <a className="HomePage-Header-container-text-1-button" href="/form">
                                Заказать<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Main extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="HomePage-Main">
                <div className="Site-title">
                    Наши работы
                </div>
                <div className="Site-desc">
                    Если интересно, то вот несколько наших работ. Нажимай на понравившеюся<br />
                    чтобы узнать больше, или можешь посетить страницу «Мы во всей красе»<br />
                    и увидеть все наши творения
                </div>
                <div className="HomePage-ourworks">
                    <OurWorksBox 
                        img="https://btcypw.db.files.1drv.com/y4mkRoMVBhpqucJl5S6P-pMeU-a7p2DSXviZR2HOtZmBq4Bgv5INyIinAApzNg8IyM2_QOxAdaddiCTxybdSjT7qg_T9Dqe0L8219PFIQs9AmdM9vv6vx_8oFgGIz0hfufyewYVIsljr6qfCqvFAy7a3xOv4cDux99FTkxmBMX1dw8-sqYcrggTZhDV7BbLpCblaNGIdKT4OM0jyz5HjAwpEg?width=356&height=488&cropmode=none"
                        title="Веб-сайт" 
                        desc1="Сайт клуба активного" 
                        desc2="отдыха Lucky Travel" 
                        href="http://localhost:3000/ourworks/sites/luckytravelsite"
                    />
                    <OurWorksBox 
                        img="https://ckwbpq.db.files.1drv.com/y4my2Xr2IRVx5Ql6ZEtIOrltYgFM0SIglWRAgwQc5rsB-9nMrMrFfFeCZh6KSjBHce94LGTh-ZFwyRJ4AZgj82AF5fdPcg6HLRysSrEIVj1qWU6WrJLOwdLX0sI1NSBtPNVqq9leE7oN7OgJZ9bphGFEZ_ipxkCgZX1F7c3knMRWO2VzOLIxZDURHnW6KQMr5A74EHKQYLH61EZsibaymufMg?width=355&height=490&cropmode=none"
                        title="Лого" 
                        desc1="Разработка логотипа" 
                        desc2="Черкасского ОТГ"
                        href="http://localhost:3000/ourworks/logo/cherkassy"
                    />
                    <OurWorksBox 
                        img="https://ckycsq.db.files.1drv.com/y4mn40yIQIa8cIz1SFIu4jOuCfv5PRCQaoEKZh4lOatdTBPw4swoLAdi2slxdxKfG7b2mpfi5jTxRJqkk82mpExUDjwjf0zvzKheDgDIVl8kYLOyBJa_DKM37qHLPeAT9TCuJZVRQtI8UQGj58WZWvlv5Wu9UKkux20HFSjqYsAEjIlsY0fyiQ7y8UY6Tgc90PMBnbBiWV0dhMb4Mn_aKZ-JA?width=356&height=488&cropmode=none"
                        title="Упаковка бизнеса" 
                        desc1="Лого, брендинг и сайт" 
                        desc2="для строй.компании" 
                        href="http://localhost:3000/ourworks/sites/stroimsnamisite"
                    />
                </div>
                <div className="Homepage-ourworks-href">
                    <a className="Homepage-ourworks-href-href" href="ourworks">
                        «Мы во всей красе!»<img className="Homepage-ourworks-href-img" src="cursor.svg" alt="cursor"/>
                    </a>
                </div>

            </div>
        )
    }
}
export class OurWorksBox extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const cards = document.querySelectorAll('.HomePage-ourworks-box')
        for(let i = 0; i < cards.length; i++){
            const card = cards[i]
            card.addEventListener('mousemove', startRotate)
            card.addEventListener('mouseout', stopRotate)
        }
        function startRotate(e){
            const cardItem = this.querySelector('.HomePage-ourworks-box-photo')
            const halfHeight = cardItem.offsetHeight / 2

            cardItem.style.transform = 
                `rotateX(${+-(e.offsetY - halfHeight)/5}deg) rotateY(${+(e.offsetX - halfHeight )/ 5}deg)`
        }
        function stopRotate(e){
            const cardItem = this.querySelector('.HomePage-ourworks-box-photo')
            cardItem.style.transform = `rotate(0)`
        }
    }


    render(){
        return(
            <a href={this.props.href}>

            <div className="HomePage-ourworks-box">
                <div className="HomePage-ourworks-box-box">
                        <img className="HomePage-ourworks-box-photo" src={this.props.img} alt="photo"/>
                        <div className="HomePage-ourworks-box-title">
                            {this.props.title}
                        </div>
                        <div className="HomePage-ourworks-box-desc">
                            {this.props.desc1}<br />
                            {this.props.desc2}
                        </div>
                </div>
            </div>
            </a>

        )
    }
}
class OurAdvantages extends React.Component {
    constructor(){
        super()
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const value = window.scrollY;
            let phone = document.getElementById('Homepage-ouradvantages')
            
            phone.style.backgroundPositionX = value + 'px'

        })
    }

    render(){
        return(
            <div
                id="Homepage-ouradvantages" 
                className="Homepage-ouradvantages">
                <div className="Wrapper">
                    <div className="Homepage-ouradvantages-container">
                        <div className="Homepage-ouradvantages-leftside">
                            <div className="Homepage-ouradvantages-leftside-text">
                                <div className="Homepage-ouradvantages-leftside-text-text">
                                    Наши преимущества,
                                    <div className="Homepage-ouradvantages-leftside-text-line1"></div>
                                </div>
                                <div className="Homepage-ouradvantages-leftside-text-text">
                                    или зачем вам нужен сайт?
                                    <div className="Homepage-ouradvantages-leftside-text-line"></div>
                                </div>
                            </div>
                            <div className="Homepage-ouradvantages-leftside-block">
                                <div className="Homepage-ouradvantages-leftside-block-text">
                                    1. Для удержания старой и <b>привлечения<br />
                                    новой аудитории.</b>
                                    <br />
                                    <br />
                                    2. Для <b>улучшения конкурентных качеств,</b> <br />
                                    что бы выделяться на фоне других и вывести свой <br />
                                    бизнес на новый уровень, <b>поднять его статус.</b>
                                    <br />
                                    <br />
                                    3. Отличный способ <b>презентовать себя</b> <br />
                                    и вызвать <b>доверие у клиентов.</b>
                                    <br />
                                    <br />
                                    4. Сайт как источник информации о вашей <br />
                                    сфере деятельности и <b>универсальный <br />
                                    инструмент</b> для любых возможностей.
                                </div>
                                <img className="Homepage-ouradvantages-leftside-block-logo" src="CR-logo-black-m.svg" alt="logo"/>
                            </div>
                        </div>
                        <div className="Homepage-ouradvantages-rightside">
                            <div className="Homepage-ouradvantages-rightside-block1" >
                                <div className="Homepage-ouradvantages-rightside-block1-title">
                                    Решения от нас:
                                </div>      
                                <div className="Homepage-ouradvantages-rightside-block1-text">
                                    1. С помощью наших сайтов, Вас будут<br /> 
                                    <b>находить новые клиенты</b> по Вашим <br />
                                    поисковым запросам. 
                                    <br />
                                    <br />
                                    2. Для того чтобы <b>выделится на фоне <br />
                                    конкурентов</b> вам необходимо: креативный <br />
                                    и стильный дизайн, удобный и понятный <br />
                                    интерфейс, полезная и правильно поданная <br />
                                    информация.
                                    <br />
                                    <br />  
                                    3. Благодаря грамотной и профессиональной<br />
                                    работе, Вы вызываете <b>доверие у клиентов.</b> <br />
                                    Красивый и лаконичный сайт поможет <br />
                                    рассказать о Вашем бизнесе.
                                    <br />
                                    <br />                                      
                                    4. Сайт может дать исчерпывающую <br />
                                    информацию о Вашей компании клиенту. <br />
                                    С нами <b>Вы сможете не ограничивать свой <br />
                                    потенциал</b> и создавать сайты с любым<br />
                                    функционалом и видом!
                                </div>
                                <img className="Homepage-ouradvantages-leftside-block-logo" src="CR-logo-black-m.svg" alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class OurAdvantagesMobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="OurAdvantagesMobile">
                <div className="Site-title">Наши преимущества, или зачем вам нужен сайт?</div>
                <div className="OurAdvantagesMobile-box">
                    С помощью наших сайтов, Вас будут
                    <b> находить новые клиенты</b> по Вашим
                    поисковым запросам.
                </div>
                <div className="OurAdvantagesMobile-box">
                    Для того чтобы <b> выделится на фоне
                    конкурентов</b> вам необходимо: креативный
                    и стильный дизайн, удобный и понятный
                    интерфейс, полезная и правильно поданная
                    информация.
                </div>
                <div className="OurAdvantagesMobile-box">
                    Благодаря грамотной и профессиональной
                    работе, Вы вызываете <b> доверие у клиентов.</b>
                    Красивый и лаконичный сайт поможет
                    рассказать о Вашем бизнесе.
                </div>
                <div className="OurAdvantagesMobile-box">
                    Сайт может дать исчерпывающую
                    информацию о Вашей компании клиенту.
                    С нами<b> Вы сможете не ограничивать свой
                    потенциал</b> и создавать сайты с любым
                    функционалом и видом!
                </div>
            </div>
        )
    }
}
class Quote extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const value = window.scrollY;
            if(value >= 2100){
                const Quote = document.getElementById('Homepage-Quote')
                
                Quote.classList.add('appearance')
                
            }

        })
    }

    render(){
        return(
            <div id="Homepage-Quote" className="Homepage-Quote">
                <div className="Homepage-Quote-text">
                    „Если Вашего бизнеса нет в Интернете, то Вас нет в бизнесе!“
                </div>
                <div className="Homepage-Quote-author">
                    — Билл Гейтс
                </div>
            </div>
        )
    }
}
class QuoteMobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Homepage-QuoteMobile">
                <div className="Homepage-QuoteMobile-text">
                    „Если Вашего бизнеса нет в Интернете, то Вас нет в бизнесе!“
                </div>
                <div className="Homepage-QuoteMobile-author">
                    — Билл Гейтс
                </div>
            </div>
        )
    }
}

class Articles extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Articles">
                <div className="Wrapper">
                    <div className="Articles-container">
                        <div className="Site-title">
                            Интересная статья
                        </div>
                        <div className="Articles-container-title">
                            „Все о логотипах. Что нужно? Какой выбрать?“
                        </div>
                        <div className="Navbar-container">
                            <a href="/ourprojects">
                                <div className="Articles-container-href">
                                    Читать эту статью
                                </div>
                                <div className="Articles-container-href-small">
                                    (тыкай)
                                </div>
                            </a>
                            <a href="/ourprojects">
                                <div className="Articles-container-href">
                                    Посмотреть другие
                                </div>
                                <div className="Articles-container-href-small">
                                        (тыкай)
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class OurServices extends React.Component{
    constructor(){
        super()
    }
    onClick(e){
        e.preventDefault()
    }
    onMouseOver1(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')
        
        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'


        const box = e.target

        box1[0].classList.add(style1)
        box2[0].classList.add(style2)
        box3[0].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[0].classList.remove(style1)
            box2[0].classList.remove(style2)
            box3[0].classList.remove(style3)
        })
    }
    onMouseOver2(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')

        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'

        const box = e.target

        box1[1].classList.add(style1)
        box2[1].classList.add(style2)
        box3[1].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[1].classList.remove(style1)
            box2[1].classList.remove(style2)
            box3[1].classList.remove(style3)
        })
    }
    onMouseOver3(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')
        
        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'

        const box = e.target

        box1[2].classList.add(style1)
        box2[2].classList.add(style2)
        box3[2].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[2].classList.remove(style1)
            box2[2].classList.remove(style2)
            box3[2].classList.remove(style3)

        })
    }
    onMouseOver4(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')
        
        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'

        const box = e.target

        box1[3].classList.add(style1)
        box2[3].classList.add(style2)
        box3[3].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[3].classList.remove(style1)
            box2[3].classList.remove(style2)
            box3[3].classList.remove(style3)

        })
    }
    onMouseOver5(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')
        
        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'

        const box = e.target

        box1[4].classList.add(style1)
        box2[4].classList.add(style2)
        box3[4].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[4].classList.remove(style1)
            box2[4].classList.remove(style2)
            box3[4].classList.remove(style3)

        })
    }
    onMouseOver6(e){
        const box1 = document.getElementsByClassName('OurServicesBox-1')
        const box2 = document.getElementsByClassName('OurServicesBox-2')
        const box3 = document.getElementsByClassName('OurServicesBox-desc')
        
        const style1 = 'OurServicesBox-1_active'
        const style2 = 'OurServicesBox-2_active'
        const style3 = 'OurServicesBox-desc_active'

        const box = e.target

        box1[5].classList.add(style1)
        box2[5].classList.add(style2)
        box3[5].classList.add(style3)

        box.addEventListener('mouseout',()=>{
            box1[5].classList.remove(style1)
            box2[5].classList.remove(style2)
            box3[5].classList.remove(style3)

        })
    }
    render(){
        return(
            <div id="OurServices">
                <div className="Site-title">
                    Наши услуги
                </div>
                <div className="Site-desc">
                    Помимо сайта Вы так же можеье заказать у нас: Логотип, визуальное оформление соц. сетей,<br />
                    создать с нами Landing Page и другие виды сайтов. Разработать айдентику и фирменный стиль
                </div>
                <div className="Navbar-container">
                    <div onMouseOver={this.onMouseOver1 = this.onMouseOver1.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">Создание логотипа и айдентики</div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            В эту услугу входит 4 варианта логотипа, с доведением до идеала самого удачного, создание паттерна, дизайн примеров применения логотипа на печатной продукции (кружки, блокноты, чехлы, футболки), создание инструкции по использованию логотипа для будущих дизайнеров.                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 4999 грн.</div>
                        </div>
                    </div>
                    <div onMouseOver={this.onMouseOver2 = this.onMouseOver2.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">Создание сайта</div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            В эту услугу входит дизайн для нужного вам количества страниц сайта, написание текста, покупка домена и хостинга на год, непосредственно само создание сайта, подключение гугл аналитики и сёрч консоли для продвижения в поисковике, бесплатное администрирование 2 месяца.                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 3999 грн.</div>
                        </div>
                    </div>
                    <div onMouseOver={this.onMouseOver3 = this.onMouseOver3.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">
                                Фирменный стиль <br />
                                и оформление соц. сетей                             
                            </div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            В эту услугу входит упаковка стиля вашего бизнеса, создание брендбука и инструкции для фирменного стиля (если их нет), дизайн 12 постов для инстаграм, создание аватарки, иконок актуального, историй для актуального.                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 2999 грн.</div>
                        </div>
                    </div>
                    <div onMouseOver={this.onMouseOver4 = this.onMouseOver4.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">
                                Графический дизайн                            
                            </div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            Графический дизайн: обработка фото, дизайн превью, рекламные баннеры, ретушь фото, дизайн постов и историй для соц. сетей.
                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 2999 грн.</div>
                        </div>
                    </div>
                    <div onMouseOver={this.onMouseOver5 = this.onMouseOver5.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">
                                Видеопродакшен                           
                            </div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            В эту услугу входит написание сценария, создание раскадровки, организация съемок и непосредственно сами съемки, монтаж видео.
                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 2999 грн.</div>
                        </div>
                    </div>
                    <div onMouseOver={this.onMouseOver6 = this.onMouseOver6.bind(this)} className="OurServicesBox">
                        <div id="OurServicesBox-1" className="OurServicesBox-1">
                            <div className="OurServicesBox-title">
                                Дизайн печатной продукции                           
                            </div>
                            <img className="OurServicesBox-logo" src="CR-logo-white-m.svg" alt="logo"/>
                        </div>
                        <div className="OurServicesBox-desc">
                            В эту услугу входит создание макета для печати на: визитках, буклетах, флаерах, футболках, кружках, блокнотах и прочей печатной продукции.
                        </div>
                        <div id="OurServicesBox-2" className="OurServicesBox-2">
                            <a className="OurServicesBox-button" href="/">
                                Заказать <img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                            </a>
                            <div className="OurServicesBox-price">От 2999 грн.</div>
                        </div>
                    </div>
                </div>  
                <div className="Homepage-ourworks-href">
                    <a className="Homepage-ourworks-href-href" href="ourworks">
                        Посмотреть все услуги
                    </a>
                </div>
            </div>
        )
    }
}
class SpecialOffer extends React.Component{
    constructor(){
        super()
    }
    onClick(e){
        e.preventDefault()
        console.log(window.pageYOffset)
        function scrollToTop(){
            let timer = setTimeout(scrollToTop, 15)
            let scrolled = window.pageYOffset

            if(scrolled <= 5010){
                scrolled = scrolled + 100
                window.scrollTo(0, scrolled)
            }else{
                clearTimeout(timer)
            }

        }
        scrollToTop()
    }
    render(){
        return(
            <div>
                <div id="Articles">
                    <div className="Wrapper">
                        <div className="Articles-container">
                            <div className="Site-title">
                                Специальное предложение
                            </div>
                            <div className="Articles-container-title">
                                При заказе 3-х и более услуг – скидка -15%!
                            </div>
                            <div className="Navbar-container">
                                <a onClick={this.onClick = this.onClick.bind(this)} className="OurServicesBox-button" href="/">
                                    Заказать<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Form extends React.Component{
    constructor(){
        super()
        
        this.state = {
            name: "Ваше имя",
            number: "Ваш номер",
            text: "Что хотите заказать"
        }
    }
    onChange1(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            name: value
        })
        
    }
    onChange2(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            number: value
        })
        
    }
    onChange3(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            text: value
        })
        
    }

    render(){
        return(
            <div id="Form">
                <div className="Wrapper">
                <div className="Site-title">Форма обратной связи</div>
                <div className="Site-desc">
                    Раз уж мы с Вами уже познакомились, давайте теперь поговорим!<br />
                    Заполните эту форму и мы с Вами свяжемся!
                </div>
                    <div className="Form-container">
                        <div>
                            <form action="telegram.php" method="POST" className="Homepage-form-form" >
                                <div class="Homepage-form-form-group">
                                    <label>
                                        <input onChange={this.onChange1=this.onChange1.bind(this)} name="user_name" type="text" className="Homepage-form-input1" placeholder="Ваше имя"></input>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label>
                                        <input onChange={this.onChange2=this.onChange2.bind(this)} name="user_phone" type="text" className="Homepage-form-input" placeholder="Ваш номер телефона"></input>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label>
                                        <input onChange={this.onChange3=this.onChange3.bind(this)}name="user_text" type="text" className="Homepage-form-input" placeholder="Что хотите заказать"></input>
                                    </label>
                                </div>
                                <div className='Homepage-form-buttonBox'>
                                    <button type="submit" className="Homepage-form-button">
                                        Отправить форму!<img className="Homepage-form-button-paw" src="paw-2.svg" alt="icon"/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="Form-rightside">
                            "name": "{this.state.name}",<br />
                            "phone": "{this.state.number}",<br />
                            "features": [<br />
                              "Message sending",<br />
                              "Spelling,<br />
                              "Check"<br />
                            ],<br />
                            "selection": [<br />
                              "member": "0",<br />
                              "framework": "react",<br />
                              "raccoonsiscool?": true,<br />
                              "features": []<br />
                            ],<br />
                            "message": [<br />
                              "text": "{this.state.text}",<br />
                              "maxlength": none<br />
                            ],<br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class OurSocialMedia extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Wrapper">
                <div id="OurSocialMedia">
                    <div className="OurSocialMedia-title">
                        Наши<br />
                        соц. сети
                    </div>
                    <div className="OurSocialMedia-container">
                        <a target="_blank" href="/">
                            <div className="OurSocialMedia-container-box">
                                <img className="OurSocialMedia-container-box-ico" src="instagram-sketched.svg" alt="icon"/>
                            </div>
                        </a>
                        <a target="_blank" href="/">
                            <div className="OurSocialMedia-container-box">
                                <img className="OurSocialMedia-container-box-ico" src="telegram.svg" alt="icon"/>
                            </div>
                        </a>
                        <a target="_blank" href="/">
                            <div className="OurSocialMedia-container-box">
                                <img className="OurSocialMedia-container-box-ico" src="youtube.svg" alt="icon"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}