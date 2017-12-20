import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Budget from './containers/Budget.js';
import Calendar from './containers/Calendar.js';
import Todo from './containers/Todo.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Calendar} />
    <Route path="budget" component={Budget} />
    <Route path="todo" component={Todo} />
  </Route>
);
