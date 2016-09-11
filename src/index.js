import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/blaze/dist/blaze.min.css';
import '../node_modules/blaze/dist/blaze.animations.min.css';
import configureStore from './store/configureStore.dev';

const store  = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
