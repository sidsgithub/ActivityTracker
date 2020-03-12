import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';

import Root from './root';
import { history } from './store/configureStore';
import store from './store';
import './axios';

ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
