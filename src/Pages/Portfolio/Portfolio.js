import React from 'react';
import { useState } from 'react';
import {Route, BrowserRouter as Router, Switch, Link, useParams, useRouteMatch} 
    from "react-router-dom";
import './Portfolio.scss';
import Photography from './PortfolioPages/Photography/Photography.js';
import Painting from './PortfolioPages/Painting/Painting.js';
import Animation from './PortfolioPages/Animation/Animation.js';

export default function Portfolio() {

    const [portfolio_path, setPath] = useState(window.location.pathname);
    console.log(portfolio_path);
    //const { path } = this.props.match;
    let { path, url } = useRouteMatch();

    return (
        <Router>
            <div class="portfolio-container">
            <div class="calloutUp">
                <div class="calloutUp2">
                </div>
            </div>
            <div class="divContainerUp">
                <div class="portfolio-nav-bar">
                    <div className={portfolio_path === '/portfolio/animation' ? "bold portfolio-nav-item1" : "portfolio-nav-item1"}>
                        <Link to={`${url}/animation`} onClick={() => setPath("/portfolio/animation")}>animation</Link>
                    </div>
                    <div className={portfolio_path === '/portfolio/painting' ? "bold portfolio-nav-item2" : "portfolio-nav-item2"}>
                        <Link to={`${url}/painting`} onClick={() => setPath("/portfolio/painting")}>painting</Link>
                    </div>
                    <div className={portfolio_path === '/portfolio/photography' ? "bold portfolio-nav-item3" : "portfolio-nav-item3"}>
                        <Link to={`${url}/photography`} onClick={() => setPath("/portfolio/photography")}>photography</Link>
                    </div>    
                </div>
                <div class="boxes">

                    <Switch>
                        <Route path={`${path}/animation`} exact component={Animation} />
                        <Route path={`${path}/painting`} exact component={Painting} />
                        <Route path={`${path}/photography`} exact component={Photography} />
                    </Switch>

                </div>
            </div>
                
            </div>
        </Router>
    );
}
