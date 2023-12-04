// app/javascript/packs/Greeting.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from API endpoint
    axios.get('/api/random_greeting')
      .then(response => setRandomGreeting(response.data.greeting))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
