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

export class OurProjects extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Wrapper">
                <div id="OurProjects">
                    <div className="Site-title">
                        Интересные штуки
                    </div>
                    <div className="Site-desc">
                        На этой странице собраны наши статьи, новости, видео, наш продакшен, а также шрифты, паттерны и прочие
                        вещи созданные нашей студией на благо миру.
                    </div>
                    <MarketLinks />
                    <MarketSwitch />
                </div>
            </div>
        )
    }
}
function MarketLinks(){
    let { path, url } = useRouteMatch();


    return(
        <nav className="Projects-navbar">
            <Link className="Projects-navbar-navbar-href" to={`${url}/useful`}>Полезные штучки</Link>
            <a className="Projects-navbar-navbar-href" href="/ourprojects">Статьи и новости</a>
            <Link className="Projects-navbar-navbar-href" to={`${url}/production`}>Проекты и продакшен</Link>
        </nav>
    )
}
function MarketSwitch(){
    let { path, url } = useRouteMatch();

    return(
        <div>
            <Switch>
                <Route exact path={path}>
                    <OurProjectsMain />
                </Route>
                <Route exact path={`${path}/:topicId`}>
                    <Topic />
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

            topicId === 'useful' ? <OurProjectsUseful /> : 
            topicId === 'production' ? <OurProjectsProduction /> : 
            topicId === 'article-kak-site-pomogaet-biznesy' ? <Article_1 /> : 
            topicId === 'article-kakaya-informacia-nyjna-saity' ? 'article-kakaya-informacia-nyjna-saity' : 
            topicId === 'article-vse-o-logo' ? 'article-vse-o-logo' : 
            topicId === 'article-kakoy-site-vibrat' ? 'article-kakoy-site-vibrat' : ''

            }
        </div>
      </div>
    );
}

class OurProjectsMain extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Wrapper">
                <ArticleBox
                    title="Статья: «Как сайт помогает бизнесу?»"
                    desc="Наверное, Вы уже замечали, что практически у каждого бизнеса есть свой сайт, на котором они продают услуги, рассказывают о своей компании, презентуют новые товары или просто делятся полезной информацией. ..."
                    href="http://localhost:3000/ourprojects/article-kak-site-pomogaet-biznesy"
                />
                <ArticleBox
                    title="Статья: «Какая информация нужна для создания сайта?»"
                    desc="Безусловно, что бы создать хороший сайт с нуля без капли информации практически невозможно. SEO специалисты не смогут нормально написать текст, составить семантику, создать портрет целевой аудитории, создать..."
                    href="http://localhost:3000/ourprojects/article-kakaya-informacia-nyjna-saity"
                />
                <ArticleBox
                    title="Статья: «Все о логотипах. Что нужно? Какой выбрать?»"
                    desc="И снова здравствуйте! Сегодня мы поговорим о логотипах и разберемся, какой же из предложенных вариантов выбрать, что отличает хороший лого от плохого, какой логотип подходит под конкретный вариант бизнеса, что нужно дизайнеру... "
                    href="http://localhost:3000/ourprojects/article-vse-o-logo"
                />
                <ArticleBox
                    title="Статья: «Какой сайт выбрать?»"
                    desc="Вы, наверное, уже знаете, что сайты бывают совершенно разные по строению, цели, размерам, внешнему виду и так далее. В этой статье мы постараемся разобраться, какой же все таки сайт подойдет именно Вам. ..."
                    href="http://localhost:3000/ourprojects/article-kakoy-site-vibrat"
                />
            </div>
        )
    }
}
class ArticleBox extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <a className="ArticleBox" href={this.props.href}>
                <div id="ArticleBox">
                    <div className="ArticleBox-title">{this.props.title}</div>
                    <div className="ArticleBox-desc">{this.props.desc}</div>
                </div>
            </a>
        )
    }
}
class OurProjectsUseful extends React.Component {
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
class OurProjectsProduction extends React.Component {
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

/*-------------------------------------------------ARTICLES----------------------------------------------------------------*/

class Article_1 extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Wrapper">
                <div className="Site-title">Статья</div>
                <div className="Site-title">«Как сайт помогает бизнесу?»</div>
                <div className="Article-text">
                    Наверное, Вы уже замечали, что практически у каждого бизнеса есть свой сайт, на котором они продают услуги, рассказывают о своей компании, презентуют новые товары или просто делятся полезной информацией. Так вот, это не с проста. В наше время однажды запущенный сайт, который просто "дрейфует" по интернету, в некоторых случаях, может принести больше пользы, чем рекламная кампания.
                </div>
                <div className="Article-title">
                    Почему же так происходит?    
                </div>
                <div className="Article-text">
                    Рекламная кампания имеет бюджет, который рано или поздно заканчивается, а если маркетолог или таргетолог плохо выполнили свою работу, так вообще вся кампания может попросту провалиться. Поэтому малобюджетные кампании, для которых не всегда нанимаются настоящие профессионалы своего дела – это риск. Сайт же, в свою очередь, требует одноразового вложения денег и одногодичного продления хостинга, но при этом, если сайт сделан грамотно, он может оставаться на первой странице поисковика месяцами. Каждый день тысячи людей ищут запросы по Вашему роду занятий, только представьте, что все эти люди будут видеть Ваш сайт, а соответственно и "лицо" Вашего бизнеса. Поэтому так важно лаконично и четко подать информацию о Вашей компании посетителю, так как от этого может зависеть количество посетителе которые превратились в клиентов (конверсия).
                </div>
                <div className="Article-title">
                    Подведем итог
                </div>
                <div className="Article-text">
                    Если у Вас уже есть бизнес но нет сайта, не стоит сразу тратить деньги на рекламу, так как создание сайта даст Вам намного большее преимущество. Создав сайт Вы сможете: сконцентрировать всю свою аудиторию в одном месте, где будет вся нужная им информация и товары или услуги, получить новых и удержать старых клиентов, получить пассивный источник клиентов, дать клиентам удобное место, где они могут ознакомится с Вашим товаром, заказать его, связаться с Вами, перейти в Ваши соц. сети или каким-либо другим образом взаимодействовать с Вами, Вы сможете практически мгновенно взаимодействовать с аудиторией и уведомлять их о новостях или акциях.
                </div>
                <a className="Article-button" href="/ourprojects">
                    К списку статей
                </a>
            </div>
        )
    }
}