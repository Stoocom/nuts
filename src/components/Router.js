import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import Header from './Header';
import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        <Route path="*" element = {
          <main style={{ padding: "1rem" }}>
            <p>Sorry There's nothing on this page!</p>
          </main>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;