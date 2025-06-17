import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Products from '../src/pages/Products';
import AddSeller from '../src/pages/AddSeller';
import Login from '../src/pages/Login';

function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-seller" element={<AddSeller />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </>
  
      
     
  );
}

export default App;
