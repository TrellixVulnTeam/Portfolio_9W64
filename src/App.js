import React from 'react';
import { useState, UseEffect } from 'react';
import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Poetry from './Pages/Poetry/Poetry';
import Contact from './Pages/Contact/Contact';
import './App.scss';
import Logo from './assets/LOGO.svg';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="Kaili Ordiz Logo"/>
        </div>
        <div className={open === true ? "open wrapper-menu" : "wrapper-menu"} onClick={() => setOpen(!open)}>
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        <div className={open === true ? "nav-bar" : "closed nav-bar"} >
            <div className={path === '/' ? "bold nav-item" : "nav-item"}>
              <Link to="/" onClick={() => {setPath("/"); setOpen(!open)}}>home</Link>
            </div>
            <div className={path === '/about' ? "bold nav-item" : "nav-item"}>
              <Link to="/about" onClick={() => {setPath("/about"); setOpen(!open)}}>about</Link>
            </div>
            <div className={path === '/portfolio' ? "bold nav-item" : "nav-item"}>
              <Link to="/portfolio/animation" onClick={() => {setPath("/portfolio"); setOpen(!open)}}>portfolio</Link>
            </div>
            <div className={path === '/poetry' ? "bold nav-item" : "nav-item"}>
              <Link to="/poetry" onClick={() => {setPath("/poetry"); setOpen(!open)}}>poetry</Link>
            </div>
            <div className={path === '/contact' ? "bold nav-item" : "nav-item"}>
              <Link to="/contact" onClick={() => {setPath("/contact"); setOpen(!open)}}>contact me</Link>
            </div>
        </div>
        <div className="rest">

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/poetry" component={Poetry} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
