import React, { useEffect, useState } from 'react';
import './App.css';

// function getUrl(relativeUrl, prefix) {
//   return prefix + "/" + relativeUrl;
// }

function App() {
  //const prefix = process.env.NODE_ENV === 'production' ? "https://heroku-app-test12.herokuapp.com/" : "http://localhost:3001";
  const [str, setData] = useState("");

  useEffect( () => {
    console.log(process.env.NODE_ENV);
    console.log('useEffect');
    fetch('users').then(res => res.json())
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
