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
import cardSpecific from './pages/Card-specific';
import About from './pages/About';
import Contact from './pages/Contact';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/about" component={About} />
                <Route path="/cardSpecific/:id" exact component={cardSpecific} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </App>
    </Router>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
