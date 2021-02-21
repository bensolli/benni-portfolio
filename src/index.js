import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import './index.css';
import App from './App';
import Homepage from './pages/Homepage';
import Bio from './pages/Bio';
import Desktop from './pages/Desktop';
import Contact from './pages/Contact';
import * as serviceWorker from './serviceWorker';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import Backgrounds from './pages/Backgrounds';
import GalleryOverview from './pages/Gallery-overview';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/bio" component={Bio} />
                <Route path="/contact" component={Contact} />
                <Route path="/desktop" component={Desktop} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/gallery/:id" exact component={Gallery} />
                <Route path="/backgrounds" component={Backgrounds} />
                <Route path="/galleryoverview" component={GalleryOverview} />
            </Switch>
        </App>
    </Router>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
