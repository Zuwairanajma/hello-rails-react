// app/javascript/packs/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from '../Greeting';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Greeting} />
      {/* Add other routes if needed */}
    </Router>
  );
};

export default App;
