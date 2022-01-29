import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import { Provider } from "react-redux";
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

