import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './containers/app/app_start.js';
import Article from './containers/Article/article.js';
import NewItem from './containers/New_Item/New_Item.js';

export default (
    <Route path='/'>
      <IndexRoute component={App} />
      <Route path='/article' component={Article} />
      <Route path='/newItem' component={NewItem} />
  </Route>
);
