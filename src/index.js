import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import configureStore from './store/index.js';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
