// app/javascript/packs/application.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './packs/App'; // Adjust the path accordingly
import { Provider } from 'react-redux';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
