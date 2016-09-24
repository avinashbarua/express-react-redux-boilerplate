import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import '../node_modules/blaze/dist/blaze.min.css';
import '../node_modules/blaze/dist/blaze.animations.min.css';
import './styles/styles.css';
import './styles/buttons.css';
import './styles/homepage.css';
import './styles/hashtagpage.css';
import configureStore from './store/configureStore.dev';

import {fetchAllHashTags} from './actions/hashActions';

const store  = configureStore();
store.dispatch(fetchAllHashTags());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
