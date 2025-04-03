import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import Earbuds from './Earbuds';
import Watches from './Watches';
import Portfolio from './Portfolio';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;