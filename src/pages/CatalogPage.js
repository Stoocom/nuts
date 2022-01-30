import React, { useEffect } from 'react';
import { Location } from '../components/Location';
import CatalogMain from '../components/CatalogMain';
import TypesMenu from '../components/TypesMenu';

function CatalogPage() {

  useEffect( () => {
    console.log(process.env.NODE_ENV);
    console.log('useEffect CatalogPage');
    // fetch('users').then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch((err) => console.log(err));
  }, [])
  return (
    <section>
      <div style={{ padding: '0 calc(50% - 800px)', minWidth: '350px' }}>
        <Location/> 
        <TypesMenu/>
        <CatalogMain />
      </div>
    </section>
  );
}

export default CatalogPage;
