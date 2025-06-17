import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo & Name */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="text-2xl">🔐</span>
        <span className="text-white font-bold text-xl">ZomatoMall</span>
      </Link>

      {/* Links */}
      <div className="flex space-x-8">
        <Link
          to="/products"
          className="text-white font-medium hover:scale-105 duration-200"
        >
          Products
        </Link>
        <Link
          to="/add-seller"
          className="text-white font-medium hover:scale-105 duration-200"
        >
          Add Seller
        </Link>
        <Link
          to="/login"
          className="text-white font-medium hover:scale-105 duration-200"
        >
          Login / Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
