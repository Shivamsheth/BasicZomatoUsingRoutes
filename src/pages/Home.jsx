import React from 'react';
; // adjust path if needed
import ImgOne from "../assets/zomato.jpg"
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src={ImgOne}
            alt="Food Delivery"
            className="rounded-3xl w-full shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left space-y-5">
          <h1 className="text-5xl lg:text-6xl font-extrabold">
            <span className="text-brown-800">Welcome</span>
            <span className="block text-blue-700 font-light">To Ultimate</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl text-red-700 font-extrabold">
            Food Delivery App — Parul-Zomato
          </h2>

          <p className="text-lg text-gray-700 font-medium">
            “Good Food with Good Mindset” 🍽️
          </p>

          <div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
              Explore Now 🚀
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
