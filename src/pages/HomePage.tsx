import React, { useEffect } from 'react';
import ImagesBlock from '../components/Images_block';
import TopWaveBlock from '../components/TopWave_block';
import Catalog from '../components/Catalog';
import DownWave from '../components/DownWave';
import NoteBlock from '../components/NoteBlock';
import './HomePage.css';

// function getUrl(relativeUrl, prefix) {
//   return prefix + "/" + relativeUrl;
// }

function HomePage() {
  //const prefix = process.env.NODE_ENV === 'production' ? "https://heroku-app-test12.herokuapp.com/" : "http://localhost:3001";
  //console.log(process.env.NODE_ENV);

  return (
    <section>
      <div className="App">  
        <ImagesBlock />
        <TopWaveBlock />
        <Catalog />
        <DownWave />
        <NoteBlock />
      </div>
    </section>
  );
}

export default HomePage;
