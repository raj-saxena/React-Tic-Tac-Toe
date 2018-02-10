import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/game" render={() => <h1>Hello Game</h1>} />
        </Switch>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
