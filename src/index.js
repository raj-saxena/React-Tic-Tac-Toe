import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes';

ReactDOM.render(
<Router>
    {routes}
</Router>, 
    document.getElementById('root'));

registerServiceWorker();
