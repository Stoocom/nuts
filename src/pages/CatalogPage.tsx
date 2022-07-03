import React, { useEffect } from 'react';
import { Location } from '../components/Location';
import CatalogMain from '../components/CatalogMain';
import TypesMenu from '../components/TypesMenu';

function CatalogPage() {
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
