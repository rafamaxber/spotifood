import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './Store/store'
import App from './App';
import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
