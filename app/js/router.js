import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './containers/app/app_start.js';
import Article from './containers/Article/article.js';

export default (
    <Route path='/'>
      <IndexRoute component={App} />
      <Route path='/article' component={Article} />
  </Route>
);
