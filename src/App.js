import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [str, setData] = useState("");

  useEffect( () => {
    console.log('useEffect');
    fetch('/').then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        { str ? str : 'No data' }
      </header>
    </div>
  );
}

export default App;
