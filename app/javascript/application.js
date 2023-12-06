// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
// app/javascript/packs/application.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App'; // Adjust the path accordingly
// import { Provider } from 'react-redux';
// import store from './store';

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   );
// });
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 

import Greeting from './components/greetings';

ReactDOM.render(
  <Provider store={store}>
    <Greeting />
  </Provider>,
  document.getElementById('root')
);