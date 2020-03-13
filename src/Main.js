import React, { Component } from "react";
 
import Header from "./Header";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


import './assets/css/main.css';

import {
  Route,
  HashRouter
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <div>
        <HashRouter>
        <Header />
          <div className="content">
        <div id="main">
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>  
        </div>
    );
  }
}
 
export default Main;