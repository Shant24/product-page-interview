import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './helpers/history';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
