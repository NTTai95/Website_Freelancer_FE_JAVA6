import React, { useEffect, useState } from 'react';
import { fetchHello } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchHello()
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
