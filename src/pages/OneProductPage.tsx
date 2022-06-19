import React, { useEffect } from 'react';
import { Location } from '../components/Location';
import Product from '../components/Product';
import { useLocation } from "react-router-dom";

function OneProductPage() {
  const location = useLocation();
  console.log(location.state);

  useEffect( () => {
    console.log('useEffect OneProductPage');
  }, [])
  return (
    <section>
      <div style={{ padding: '0 calc(50% - 800px)', minWidth: '350px' }}>
        <Location /> 
        <Product card={location.state}/>
      </div>
    </section>
  );
}

export default OneProductPage;
