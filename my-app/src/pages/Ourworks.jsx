import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { OurWorksBox } from './HomePage';

export class OurWorks extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="OurWorks">
                <MarketLinks />
                <MarketSwitch />
            </div>
        )
    }
}
function MarketLinks(){
    let { path, url } = useRouteMatch();


    return(
        <nav className="OurWorks-navbar">
            <a className="OurWorks-navbar-href" href="/ourworks">Все работы</a>
            <Link className="OurWorks-navbar-href" to={`${url}/logo`}>Лого</Link>
            <Link className="OurWorks-navbar-href" to={`${url}/sites`}>Сайты</Link>
            <Link className="OurWorks-navbar-href" to={`${url}/style`}>Фирменный стиль</Link>
            <Link className="OurWorks-navbar-href" to={`${url}/video`}>Видео</Link>
        </nav>
    )
}
function MarketSwitch(){
    let { path, url } = useRouteMatch();

    return(
        <div>
            <Switch>
                <Route exact path={path}>
                    <OurWorksMain />
                </Route>
                <Route exact path={`${path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={`${path}/sites/:topicId`}>
                    <TopicSites />
                </Route>
                <Route path={`${path}/logo/:topicId`}>
                    <TopicLogo />
                </Route>
                <Route path={`${path}/styles/:topicId`}>
                    <TopicStyles />
                </Route>
                <Route path={`${path}/video/:topicId`}>
                    <TopicVideo />
                </Route>
            </Switch>
        </div>
    )
}
function Topic() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'logo' ? <OurWorksLogo /> : 
            topicId === 'sites' ? <OurWorksSites /> : 
            topicId === 'style' ? <OurWorksStyles /> : 
            topicId === 'video' ? <OurWorksVideo /> : ''
            
            }
        </div>
      </div>
    );
}
function TopicSites() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'luckytravelsite' ? <LuckyTravelSiteCase /> :  
            topicId === 'stroimsnamisite' ? <StroimSNamiSiteCase /> :  ''

            
            }
        </div>
      </div>
    );
}
function TopicLogo() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'lookup' ? <LookUpLogoCase /> :  
            topicId === 'stroimsnami' ? <StroimSNamiLogoCase /> :  
            topicId === 'cherkassy' ? <GvardLogoCase /> :  ''

            
            }
        </div>
      </div>
    );
}
function TopicStyles() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'luckytravelsite' ? 'luckytravelsite' :  ''
            
            }
        </div>
      </div>
    );
}
function TopicVideo() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'luckytravelsite' ? 'luckytravelsite' :  ''
            
            }
        </div>
      </div>
    );
}

class OurWorksMain extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
                <div className="Wrapper">
                    <div className="Site-title">
                        Все работы
                    </div>
                    <div className="Site-desc">
                        На этой странице собраны все наши работы. Если Вы хотите ознакомится с нашим творчеством ,<br /> 
                        то просто листайте вниз. Если же Вы хотите посмотеть конкретные примеры наших работ <br />
                        в опреденленной отрасли, то сверху есть фильтр по категориям.
                    </div>
                </div>
                <div style={{backgroundImage:'url(https://ckxmya.db.files.1drv.com/y4m0lEANUIcoz1MQ5v2MfbyGrQghosHanw55nqcv8SOFY0Edi6a14Yh7o5HsL9QpkUx-z9UFEZ3uOiCIP04KLgHHWegVoB5yoMRIhzx72kASglSMV_34yA5WaerCuFzJc9ZYZHqRGQ1vsRzrJQQ8tnaCh97Q8l3dnwjTV-maEZxoA57CJVtPUVOcWE7WAKD0i1Mv4fyKHsyCINHvHSKRmWR1w?width=1440&height=628&cropmode=none)'}} 
                    className="OurWorksMain-block1">
                    <div className="OurWorksMain-block1-title1">Сайт для клуба активного</div>
                    <div className="OurWorksMain-block1-title2">отдыха «Lucky Travel»</div>
                    <a href="ourworks/sites/luckytravelsite" className="OurWorksMain-block1-bottom">
                        Посмотреть<img className="OurServicesBox-button-paw" src="paw-2.svg" alt="icon"/>
                    </a>
                </div>
                <div className="Wrapper">
                    <div className="HomePage-ourworks">
                        <OurWorksBox 
                            img="https://ckw3jg.db.files.1drv.com/y4mPWcSwkgqdR5ddenYmtZVg_ZShBEc6UMkBrjHikJ93SE63Sc2_NuFRXmwO-KVNVXnBrb8E0QIzEqkm2PG8ehFMm_qoPcrKS_tulzgS-jtE_EjLVT_6L7d4IGbFN6TcYAdfF6H6wmx9khnVc56Ij6blte3N4bwtnd3ZjvH7GkM-DCL1EKHhnoLkEH5-H3lB9xCTndJK9IrL9cKZNkHnj8zTA?width=356&height=488&cropmode=none"
                            title="Лого" 
                            desc1="Логотип приложения для" 
                            desc2="разминки глаз" 
                            href="ourworks/logo/lookup"
                        />
                        <OurWorksBox 
                            img="https://ckwbpq.db.files.1drv.com/y4my2Xr2IRVx5Ql6ZEtIOrltYgFM0SIglWRAgwQc5rsB-9nMrMrFfFeCZh6KSjBHce94LGTh-ZFwyRJ4AZgj82AF5fdPcg6HLRysSrEIVj1qWU6WrJLOwdLX0sI1NSBtPNVqq9leE7oN7OgJZ9bphGFEZ_ipxkCgZX1F7c3knMRWO2VzOLIxZDURHnW6KQMr5A74EHKQYLH61EZsibaymufMg?width=355&height=490&cropmode=none"
                            title="Лого" 
                            desc1="Разработка логотипа" 
                            desc2="Черкасского ОТГ"
                            href="ourworks/logo/cherkassy"
                        />
                        <OurWorksBox 
                            img="https://ckycsq.db.files.1drv.com/y4mn40yIQIa8cIz1SFIu4jOuCfv5PRCQaoEKZh4lOatdTBPw4swoLAdi2slxdxKfG7b2mpfi5jTxRJqkk82mpExUDjwjf0zvzKheDgDIVl8kYLOyBJa_DKM37qHLPeAT9TCuJZVRQtI8UQGj58WZWvlv5Wu9UKkux20HFSjqYsAEjIlsY0fyiQ7y8UY6Tgc90PMBnbBiWV0dhMb4Mn_aKZ-JA?width=356&height=488&cropmode=none"
                            title="Упаковка бизнеса" 
                            desc1="Лого, брендинг и сайт" 
                            desc2="для строй.компании" 
                            href="ourworks/logo/stroimsnami"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

class OurWorksLogo extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="Wrapper">
                <div className="Site-title">
                    Лого
                </div>
                <div className="Site-desc">
                    На этой странице собраны все логотипы, которые создала наша студия. Здесь Вы можете<br />
                    оценить работу наших дизайнеров, вдохновится или подсмотреть парочку идей.
                </div>
                <OurWorksLogoBoxBig 
                    img="https://ckzsmg.db.files.1drv.com/y4m9BM7FM27BGrizlmOziNodWTWF4tF97nCrqPOW63mp8Kbk-OUuOzrrQTACTVnMvNgbK63Gk7kRiRbyShvZYrkRuJ2Tw6MWlBCaoqpmsamzxCINYNnU8Y_aXLep7laNIk6sdh3Bf8ZIzgsTyaa3-RPDPe8pB8ZDBA_hGU9rwVm18AiBDG1lqmBnYhlbNvLPrRkzqKkYc6V8XmpDRo9K-IBaA?width=1240&height=589&cropmode=none"
                    title="Логотип для Черкасской ОТГ" 
                    desc1="Лого Черкасской ОТГ призван ознакомить человека с основными достоинствами и историей"
                    desc2="данного объединения. Этот логотип разработан в максимально каноничном стиле."
                    href="logo/cherkassy"
                />
                <div className="OurWorksLogoBox-container">
                    <div className="Site-desc">
                        Кликните по карточке чтобы взглянуть на работу
                    </div>
                    <div className="Navbar-container">
                        <OurWorksLogoBox
                            img="https://ckwiha.db.files.1drv.com/y4m96vlCl0fpw6FcZTUHX0xl7yDN__lmwvOqRU5TAGQ6p_Dmh9Gx9FcH2dXiJyezrMXqAnNNy3B5g9oHEGYwKovxErxL0XyekYUmUAMokcd_o7pqODXIBKQo1IeBHUaxqS5DFbZvZIlY0lWXQ9mIIRSnypmWpCY56VmzzIYnAQRlicD3v1cmU0NFKY4WICZSeiHQ-pBNkuCeC7u8jMEk432Xw?width=605&height=605&cropmode=none"
                            title="Логотип «Look Up-а»"
                            desc1="Простой, запоминающийся и интересный – таким"
                            desc2="мы представляли и сделали этот логотип."
                            href="logo/lookup"
                        />
                        <OurWorksLogoBox
                            img="https://ckxtdw.db.files.1drv.com/y4manJUQefthEVP_7pvgwNgkWMDsjQ6EdY8mSlViTXelduW0GHMwwJ39PX2x5sRpbCeSociWvrxxuggnnT960bYyiMKYpxDrmtDerG257Rwrm1bR3Gld5r1d_u4uF0roHMXiSSri_L8TVOkmVmAdiL6KniNJ1jMPAxoydl1o-QUpnnqniNzepeFRHxZkPHtaObNWcIoeaProQqnpLlSGe_aag?width=605&height=605&cropmode=none"
                            title="Логотип «Строим с Нами»"
                            desc1="Максимально просто. Упор на простоту был "
                            desc2="требованием заказчика. Мы старались."
                            href="logo/stroimsnami"
                        />
                    </div>
                </div>
                <div className="OurWorks-comingsoon">
                    Скоро здесь будет еще больше работ!
                </div>
            </div>
        )
    }
}
class OurWorksLogoBoxBig extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <a href={this.props.href}>
            <div className="OurWorksLogoBoxBig">
                <img className="OurWorksLogoBoxBig-img" src={this.props.img} alt="photobg"/>
                <div className="OurWorksLogoBoxBig-container">
                <div className="OurWorksLogoBoxBig-container-title">{this.props.title}</div>
                    <div className="OurWorksLogoBoxBig-container-desc">
                        {this.props.desc1}<br />
                        {this.props.desc2}
                    </div>
                </div>
            </div>
            </a>
        )
    }
}
class OurWorksLogoBox extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const cards = document.querySelectorAll('.OurWorksLogoBox')
        for(let i = 0; i < cards.length; i++){
            const card = cards[i]
            card.addEventListener('mousemove', startRotate)
            card.addEventListener('mouseout', stopRotate)
        }
        function startRotate(e){
            const cardItem = this.querySelector('.OurWorksLogoBox-img')
            const halfHeight = cardItem.offsetHeight / 2

            cardItem.style.transform = 
                `rotateX(${+-(e.offsetY - halfHeight)/5}deg) rotateY(${+(e.offsetX - halfHeight )/ 5}deg)`
        }
        function stopRotate(e){
            const cardItem = this.querySelector('.OurWorksLogoBox-img')
            cardItem.style.transform = `rotate(0)`
        }
    }
    
    render(){
        return(
            <a href={this.props.href}>
            <div className="OurWorksLogoBox">
                <img className="OurWorksLogoBox-img" src={this.props.img} alt="photobg"/>
                <div className="OurWorksLogoBox-container-text">
                    <div className="OurWorksLogoBox-container-title">{this.props.title}</div>
                    <div className="OurWorksLogoBox-container-desc">
                        {this.props.desc1}<br />
                        {this.props.desc2}
                    </div>
                </div>
            </div>
            </a>
        )
    }
}

class OurWorksSites extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="Wrapper">
                <div className="Site-title">
                    Сайты
                </div>
                <div className="Site-desc">
                    На этой странице собраны сайты, которые создала наша студия. Здесь, как и во всех остальных <br />
                    категориях, постоянно появляются новые работы, поэтому есть смысл время от времени <br />
                    посещать эту страницу.
                </div>
                <div className="Navbar-container">
                    <OurWorksLogoBox
                        img="https://ckyjpa.db.files.1drv.com/y4mhF6CxlwPIrBZ6rOWWO9WSf82uglcYpznoaqpeI38P8UVfHmEQ2ZNiJy-aeL9a-s2iWPFMq0z4CGKTRBXRnD2z9AwQrtgR1Q7-uOkhLp6d5PSW4zel7a26MjhiApFGOa1Pzkxd6jYV23Bs9Ws-xQDtlddXsrotfW_dsANeF6nUullw-c14qobF4plb1AcrcevynBG0rcTpYcBni6dV_wsEQ?width=1080&height=1080&cropmode=none"
                        title="Сайт «Lucky Travel»"
                        desc1="Красивые фото, максимум информации."
                        desc2="Любое путешествие приятнее с Lucky Travel."
                        href="sites/luckytravelsite"
                    />
                    <OurWorksLogoBox
                        img="https://ckwpbq.db.files.1drv.com/y4me_6apAjtfMGavgfotsqR5uWZHDBvpzlqe-wg9LpoaF_rba8x8DKPjKjAef1FY3v_LzpfQkqkfQrXjE_HUy70fJ4JrXo0e9qupK3ZakRRCX1H1c5_7jhh9czQwIOyM-ao7Eb6_cZZOgmcfk35ED3jkqgmbCazl8XLtXrHK6g2XOJUORBcDWqh2m1TflzhBfLZEWhCHh_6z3WC43Fd8e0MNQ?width=607&height=605&cropmode=none"
                        title="Сайт «Строим с Нами»"
                        desc1="Упор бы сделан на каталог товаров. Это и была"
                        desc2="первоначальная цель создания сайта."
                        href="sites/stroimsnamisite"
                    />
                </div>
                <div className="OurWorks-comingsoon">
                    Скоро здесь будет еще больше работ!
                </div>
            </div>
        )
    }
}

class OurWorksStyles extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="Wrapper">
                <div className="OurWorks-comingsoon">
                    Упс... Кажется, здесь, пока что, ничего нет).
                </div>
            </div>
        )
    }
}

class OurWorksVideo extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="Wrapper">
                <div className="OurWorks-comingsoon">
                    Упс... Кажется, здесь, пока что, ничего нет).
                </div>
            </div>
        )
    }
}


/*-------------------------------------------------------------SITE CASES----------------------------------------------------*/
class LuckyTravelSiteCase extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                opa laki
            </div>
        )
    }
}
class StroimSNamiSiteCase extends React.Component{
    constructor(){
        super()

        this.state = {
            photos: [],
            index: 0,
            title: 'Главная'
        }
    }

    render(){
        return(
            <div>
                <Stroim_S_Nami_Header color2="black" bg2="white" />
                <div className="Wrapper">
                    <div className="StroimSNamiSiteCase-block-1">
                        <div className="StroimSNamiSiteCase-block-1-text">
                            Задача: разработать дизайн и создать <br />
                            сайт строительной компаниию<br />
                            Отдельные требования клиента: добавить каталог товаров <br />
                            и возможность заказа.
                        </div>
                        <div className="StroimSNamiSiteCase-block-1-button-box">
                            <a target="_blank" href="https://stroim-s-nami.com.ua/" className="StroimSNamiSiteCase-block-1-button">
                                Посетить сайт
                            </a>
                        </div>
                    </div>
                </div>
                <div className="StroimSNamiSiteCase-block-1">
                    <div className="Wrapper">
                        <div className="StroimSNamiSiteCase-block-1-text">
                            Строительная компания "Строим с Нами" уже более 9 лет<br />
                            на рынке и с каждым годом все больше и больше радует<br />
                            своих клиентов. Технологии современного строительства <br />
                            ушли так далеко вперед, что сегодня можно в кратчайшие <br />
                            сроки изготовить забор под любые желания и требования.
                        </div>
                    </div>
                    <img className="StroimSNamiSiteCase-block-2-img"  src="https://2qn4ja.db.files.1drv.com/y4mnt4OaQsGN1AAooph-O8LRZmlHQp6Fwkf4PTDyV00-3Caf-NMqbFLIXsWyz4nPoNKuMrIdzqz0v8AzKbQnKIA-wLBgGBtXpUomu0QmXUavm-7cwAGGaVYv1zeOIpbZdOPJO99mLP6d-z_cNCEPy0Y6gNSNgJ5381tgWpe0h3EiIyoEsB6zjhVgg3nA8VE19PwGqXNo-19q-lJlj7a2Z2HOA?width=677&height=679&cropmode=none" alt="photo" />
                </div>
                <div className="Wrapper">
                    <div className="Site-title">Основные страницы</div>
                    <div className="StroimSNamiSiteCase-block-3-choose">{this.state.title}</div>
                    <img className="StroimSNamiSiteCase-block-3-img" src="https://2qmtmq.db.files.1drv.com/y4m7EUsGaetF6A4lWGEz2n0v_ocotIU8xlDUpzPWbh4AgHzqUjtqh3fIyMzNouixEYtLxG7sp-Wg8VQ7Oud6NE7ld7Wbb6YgvmAA3bgOUL6VIzvywM1mWXDBcrxKRRakfRT9rC4y5cFh4bZiC0sfW9k-wuLl0lM6Ssy2cyaCzpLnXfXIOxBX91D6a2dbCWwDbfwwVjflt3xg0e9CMQ5kEOy6g?width=1037&height=3122&cropmode=none" alt="photo" />
                </div>
            </div>
        )
    }
}
/*-------------------------------------------------------------LOGO CASES----------------------------------------------------*/
class GvardLogoCase extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="Site-title">Черкасское ОТГ</div>     
                <div className="Site-desc">Герб</div>                
                <div className="GvardLogoCase-container">
                <div className="GvardLogoCase-container-box">
                    <img src="https://oyb6pq.db.files.1drv.com/y4mnKtCgY9xj-AsVYgMIPIj12mLB9lDuLzrp5QCZxVdTa81boSQ98c0ZOvTALQPKoLeIWyuFJn8nbXmHXAK-v27lP03wMxfhvMObQhLmQu_GxexbIeM-Wtq3Bp1JYS7RnuHd7pAQcBmBzFUm_mTmsLyE6gIotNsQNB2k3V6WhPmzJBw2X1YU-uEYqlqjnIuzKBnkvYjImTYN_2Y3LrzP_tkPg?width=283&height=491&cropmode=none" alt="photo" className="GvardLogoCase-container-box-img" />
                    <div className="GvardLogoCase-container-box-desc">
                        «Лес, река, песок и небо –<br />
                        Все здесь есть, приезжай смело!»
                    </div>
                </div>
                </div>
                <div className="GvardLogoCase-container-box1">
                    <img src="https://oyavsg.db.files.1drv.com/y4m8CRRuFz011bHeDivz5Uq_1_h0skqiacCaAmAdhrtg8rEuxGWqbN9Fr7YBqzIJBiFkCHh4s9iwnButRj6HTSy0bUeiSO2o-rbnhim5o5LuRcgaZQruR5Q3rDgKReZ7sLmApSuxJ56yGxy5Z0mZ_zXGkuVxC9wtCaLupGm3Of_AX6dQzL6nZuyIdu3-_tHwC0x3yrwdxqe7Mczmk3_4vS9jA?width=283&height=428&cropmode=none" />
                    <div>
                        <div className="GvardLogoCase-container-title">Форма</div>
                        <div className="GvardLogoCase-container-desc">
                            Так как Черкасская ОТГ находится в Днепропетровской<br />
                            области в Украине, то и форма герба напоминает форму <br />
                            логотипа Днепра. Верхняя полоса символизирует реку Самара, <br />
                            котора огибает практически всю Черкасскую ОТГ. Щит <br />
                            символизирует армию, так как на территории Черкасской ОТГ <br />
                            находится сразу несколько военных частей.
                        </div>
                    </div>
                </div>
                <div className="GvardLogoCase-container-box1">
                    <div>
                        <div className="GvardLogoCase-container-title">Графические элементы</div>
                        <div className="GvardLogoCase-container-desc">
                            Так как Черкасская ОТГ находится в Днепропетровской <br />
                            области в Украине, то и форма герба напоминает форму <br />
                            логотипа Днепра. Верхняя полоса символизирует реку Самара, <br />
                            котора огибает практически всю Черкасскую ОТГ. Щит <br />
                            символизирует армию, так как на территории Черкасской ОТГ <br />
                            находится сразу несколько военных частей.
                        </div>
                    </div>
                    <img src="https://oycwjg.db.files.1drv.com/y4mECXc3qTZbm5OBZ-0SW5YUiFyV46zYKmHawvUgADB4wOKOINnTtj5Ni0COadbqDB-zkdyv5YG63hbqfVNFXIR4OiLziOWnbIY_V29tXJe0r0HjHgERMfvJVxzQHMsMjlGS70buET27T-21zwad7ZA_abSG5Xb9nlou5oOE86g_t5iSa8sjEWzingUaSIpMielaGKd33a9qmrFTxBHYqxkTw?width=285&height=390&cropmode=none" />

                </div>
                <div style={{backgroundImage:'url(https://oydfya.db.files.1drv.com/y4mQf1onCmgS8GSHTTnLOjXEWw-2SjUKIqjXNmKUyhOnZOnw-g0cWWzxedaptS1IJEQ-hUg6-smU71Gh2H17pgBYl5TbI6s_iAu-Kq13fKXW7Pamo_R2lAj6LsatDqK-fyAQYRnF9TOE_0exF_SYLdtYTEazhyT1oIKHO0XaLQdxugAbTIHZ_xXFS7BSOa-5Zu4_vawY7A_dDf-amzX0VQ-pA?width=1437&height=1240&cropmode=none)'}} className="GvardLogoCase-container-box2">
                    <div className="GvardLogoCase-container-box2-box">
                        Дизайнер: Виктор Евенко<br />
                        Фотограф: Богдан Борисов<br />
                        Сделано за 3 дня.<br />
                    </div>
                </div>
            </div>
        )
    }
}
class StroimSNamiLogoCase extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Stroim_S_Nami_Header color1="black" bg1="white" />
                <div className="Wrapper">
                    <div className="StroimSNamiLogo-block-1">
                        Задача: разработать логотип строительной компании.<br />
                        Отдельные требования клиента: максимально просто <br />
                        и без заморочек.
                    </div>
                </div>
                <img className="StroimSNamiLogo-block-1-img" src="https://ppvxyq.db.files.1drv.com/y4m7MKxnSJDiTUDG2VQIh-6yJVGgVCrh5geE52G_usZMKB1JoSeb3OiNSRIq8JzQKAcvwYYDcCphZ3-phKictWK-tSzJG64kKrJXYJ4d53ZKh5zhPr9H0tveKbRYpDFa58EalFNg8vaWvoXoervIPEblEsmNaiL0JAc7vH5l3_ocU7CDLascKljPrSPwOKSZSMXT_IbSFb16TpG0ozvXv7svQ?width=1342&height=623&cropmode=none" />
                <img className="StroimSNamiLogo-block-1-img" src="https://ppxypq.db.files.1drv.com/y4m84JjXSy45BndzXr4vgTjnUfT3100PeQzQb3nxYWsteytvjd6GqWSU8_oABpRiIFola1AufiqKTfdOcmmi55K1oX7hXFrq0e5o04VQMv5_hWLEtCY5BU3J8m-bIMYvKjOpviYLGD50JJ6G9a9oqhS_Wjsr0btvG4ql4X_3n4tEmDt3pHD2Hlaht6z96r-wMzAxT_5cqQKW8JN6lyZUvNFxQ?width=1436&height=954&cropmode=none" />
                <div className="Wrapper">
                    <div className="StroimSNamiLogo-block-2">
                        Строят быстро и качественно. Ребята уже более 9 лет <br />
                        на рынке, поэтому они знают что делают. Побывав   <br />
                        у них на производстве сразу стало понятно что они <br />
                        не шутки шутят).
                    </div>
                </div>
                <div className="StroimSNamiLogo-block-3">
                    Простота
                </div>
                <div className="Wrapper">
                    <div className="StroimSNamiLogo-block-5">
                        <img src="https://ppwnsg.db.files.1drv.com/y4mIywzVnOsNLGuecVsdmNPYWR7jf9VnLrHWLAeb-wMJoreI7Myr5mmDvugPfQblpZ2MQMdmgdEzw7pipxwCOd27mBwHM9lg0jI-B-6oN-RHgKysNICiFfH411sArmM3HC2Wg1ui_aJWoX52nI7ZAI-sxnMC-zCr1X1uY-IqwDXLT9Ty5-hZxFRxfUPb-U71A23yykNFoAsCza63SyhGE9vLg?width=577&height=194&cropmode=none" alt="logo" />
                        <div className="StroimSNamiLogo-block-5-text">
                            Главным требованием клиента было изобразить <br />
                            забор максимально просто, «Так, что бы при <br />
                            первом же взгляде на него было понятно – это <br />
                            забор!» Было придумано 8 вариантов <br />
                            по 3-4 вариации для каждого. <br />
                            Столько заборов мы еще не изучали                        
                        </div>
                    </div>
                </div>
                <img src="https://ppuojw.db.files.1drv.com/y4mBSfmxCdjrDfdbCQmtoQPv659ynWgbSWsggqWRHxwgtCshNwV88ztmJT8aSRZYZeiWN4cGlonM755hlGx0cwTG1S7x4d-a8UC7bBaNmXVbjUF3T6wMbN1V5sXPFKqC7uCHYNlv80RUW92fAd3-uba3VjnUCw7Z5y7wVyclGOXhaP-Y5S1A3m2cHTDaYhv15xpcB0Xgm-ansScv940daJvKQ?width=1440&height=929&cropmode=none" alt="logo" className="StroimSNamiLogo-block-1-img" />

            </div>
        )
    }
}
class Stroim_S_Nami_Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="Stroim-S-Nami-Header-bg" style={{backgroundImage:'url(https://ppw8va.db.files.1drv.com/y4mcNQC-Fqg9JTCNP-dCmsLlk5WvxTJ7PfDD5Jd4ibiENrM0R0xbsxmL3lsVXA8qGLqro10JnzgTrDLYCfIzShdpoEXYfEAFylC4d0CHBr3gpJxHyMT_TwlIDUeY4f4WKhU8NMbGyOWw0zmPaVorczDkIbbS10uYhOA_DGOG4jUCIvWsvJR8ImXzbbxZaUMMuAcFKstXuo7rlYgFNpzUpJH8g?width=1440&height=675&cropmode=none)'}} >
                    <div className="Wrapper">
                        <div className="Stroim-S-Nami-Header-title">Строим с Нами</div>
                        <div className="Stroim-S-Nami-Header-box">
                            <a style={{color:`${this.props.color1}`, backgroundColor:`${this.props.bg1}`}} href="http://localhost:3000/ourworks/logo/stroimsnami" className="Stroim-S-Nami-Header-href">Лого</a>
                            <a style={{color:`${this.props.color2}`, backgroundColor:`${this.props.bg2}`}} href="http://localhost:3000/ourworks/sites/stroimsnamisite" className="Stroim-S-Nami-Header-href">Сайт</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class LookUpLogoCase extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const value = window.scrollY;
            let phone = document.querySelector('.LookUpLogoCase-block-3-photo-2')
            
            phone.style.backgroundPositionX = value + 'px'

        })
    }


    render(){
        return(
            <div>
                <div className="LookUpLogoCase-block-1" style={{backgroundImage:'url(https://oydmdw.db.files.1drv.com/y4m1F1fHh8OvcT1IEgyyDJJTAAGuUaZeXke-u6Mb6xm3GdB5JHqXWnF1KJJAPDYx_Uby6_KiNg78ZC6GQ8ygW8ehWKGowwa5UNp4ZsqAN7wXDS6Fc9wG9WAE8s5eX-mvVBTXEEecYJ_Dv9jsOTiwWG5xpVm4pnLSCZO4ppUpXgsscXo7A1aYZx6upeXxfleFRDORxMlH5jRDYyPLbFq59upFw?width=1440&height=846&cropmode=none)'}} >
                    <div className="Wrapper">
                        <div className="LookUpLogoCase-block-1-title">Логотип и дизайн приложения</div>
                    </div>
                </div>
                <div className="LookUpLogoCase-block-2">
                    <div className="Wrapper">
                        <div className="LookUpLogoCase-block-2-text">
                            Look Up – веб-приложение, помогающее отдохнуть <br />
                            глазам, снять с них напряжение и немного<br />
                            расслабиться после длительной работы за <br />
                            компьютером. Был разработал логотип, а так же <br />
                            прототип дизайна приложения в 3-х цветовых <br />
                            вариациях.                        
                        </div>
                    </div>
                </div>
                <div className="Wrapper">
                    <img src="https://oycbha.db.files.1drv.com/y4mL1sk5vOBXzARVtWDuaI-4lAuxR817WJaWR5A5V1rpKWO-_qc_rt3RNAb_TgT8EhrLvVhXMRqx2UAGFua5-C2M9W1LPHHl29Kly-L1_UrZkHWYKjmFjlbiM_po63ohDyPgYAiOOS93PU-axMbB-_orssvEMkMndE9EEPXNzsanwQqMaKjIQQa1ESJHFMsdI3FU-XCvEkA7g4NyFEQSDx7FQ?width=1080&height=720&cropmode=none" />
                </div>
                <div className="LookUpLogoCase-block-3">
                    <div className='Site-title'>Приложение</div>
                    <img className="LookUpLogoCase-block-3-photo-1" src="https://ppxr9g.db.files.1drv.com/y4m70dZPgKm0fFdqUM__tB-S20tl6f5-GIOfZsdagNWnPCzoAekWJA_RwNmKnbBLn36uCCzi3AbIqorDY4Tyvqpj3ScweHkkDhc2RF_toGa4wJ1ewXPB_7ENjpEfpO54rogqvkpqb6fiFy71kxW7VjkeYirCK4oGiv0QB1lyiwGv4hSvyoriorhiFNSSQ6Rw5Qbfz4kkdqgED0jrmqf9ITtOA?width=1439&height=1219&cropmode=none" alt="photo" />
                    <div className="LookUpLogoCase-block-3-photo-2" style={{backgroundImage:'url(https://ppwgaw.db.files.1drv.com/y4mdgTYJ5vyPXTOh1fE-PH6vcWy_kcMKRW_rK4i03MjA0RMpYA3bZZbDeh08aRamgaZi7hxycLa-7z_ET5j8pGpy9ZA0B18N7PmdNMV9E40Mg4MW16Mql4oyJBXXqM0hrHdcpA7eCzz8Av3GMn37eNHZlkMLC0avTjDc9V4e_4VujVBc-vUJfYCkQXsrxNYPu-PxC9zzeCP_AJlMYiUP7lIeg?width=3114&height=450&cropmode=none)'}}></div>
                </div>
            </div>
        )
    }
}