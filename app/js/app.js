import "../css/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/app/app_start.js';
import Article from './containers/Article/article.js';
import appRoutes from './router.js';


const Dispatcher = require('flux').Dispatcher;

ReactDOM.render(
    <Router history={browserHistory} routes={appRoutes} />,
    document.getElementById('react')
)
require ("../css/main.scss");
