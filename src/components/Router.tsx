import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CartPage from '../pages/CartPage';
import Header from './Header';
import Footer from './Footer';
import PrivateRoute from '../hocs/PrivateRoute';
import OneProductPage from '../pages/OneProductPage';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<OneProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={
          <PrivateRoute>
            <LoginPage />
          </PrivateRoute>
        } />
        <Route path="/signup" element={<SignupPage />} />
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