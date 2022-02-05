import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Header from './Header';
import Footer from './Footer';
import PrivateRoute from '../hocs/PrivateRoute';
import PublicRoute from '../hocs/PublicRoute';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        {/* <Route exact path="/cart" element={<CartPage />} /> */}
        <Route exact path="/login" element={
          <PrivateRoute>
            <LoginPage />
          </PrivateRoute>
        } />
        <Route exact path="/signup" element={<SignupPage />} />
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