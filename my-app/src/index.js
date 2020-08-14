import React from 'react';
import ReactDOM from 'react-dom';

import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Header } from './Header';
import { OurWorks } from './pages/Ourworks';
import { OurProjects } from './pages/OurProjects';
import { AboutUs } from './pages/AboutUs';
import { FormPage } from './pages/Form';



ReactDOM.render(
  <Router>
    <Header />
    <Navbar />
    <div className="Content">
      <Switch>

      <Route path="/" exact component={HomePage} />

      <Route path="/ourworks" component={OurWorks} />
      <Route path="/ourprojects" component={OurProjects} />
      <Route path="/aboutus" component={AboutUs} />

      <Route path="/form" component={FormPage} />




      
      
      
      <Redirect to="/"></Redirect>
      </Switch>
    </div>
    <Footer />
  </Router>,







  document.getElementById('root')
);


