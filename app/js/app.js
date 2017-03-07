import "../css/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/app/app_start.js';
import Article from './containers/Article/article.js';
import NewItem from './containers/New_Item/New_Item.js';
import appRoutes from './router.js';

ReactDOM.render(
    <Router history={browserHistory} routes={appRoutes} />,
    // <App />,
    // <Article />,
    // <NewItem />,
    document.getElementById('react')
);

require ("../css/main.scss");
