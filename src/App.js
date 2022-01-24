import React, { useEffect } from 'react';
import Header from './components/Header';
import ImagesBlock from './components/Images_block';
import TopWaveBlock from './components/TopWave_block';
import Catalog from './components/Catalog';
import DownWave from './components/DownWave';
import './App.css';

// function getUrl(relativeUrl, prefix) {
//   return prefix + "/" + relativeUrl;
// }

function App() {
  //const prefix = process.env.NODE_ENV === 'production' ? "https://heroku-app-test12.herokuapp.com/" : "http://localhost:3001";
  //const [str] = useState("");

  useEffect( () => {
    console.log(process.env.NODE_ENV);
    console.log('useEffect MainPage');
    // fetch('users').then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch((err) => console.log(err));
  }, [])
  return (
    <section>
      <div className="App">  
        <Catalog />
      </div>
    </section>
  );
}

export default App;
