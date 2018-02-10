import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
import Game from './components/game';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/game/:grid_size" component={Game} />
        </Switch>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
