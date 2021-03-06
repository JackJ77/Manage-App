import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Budget from './containers/Budget/Budget.js';
import Todo from './containers/Todo/Todo.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute path="budget" component={Budget} />
    <Route path="todo" component={Todo} />
  </Route>
);
