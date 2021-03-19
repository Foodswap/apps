import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import {
  Provider,
} from 'react-redux';

import store from './store';
import App from './components/App';
import  'react-toastify/dist/ReactToastify.css';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
