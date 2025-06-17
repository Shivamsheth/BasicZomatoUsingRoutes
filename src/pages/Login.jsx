import React from 'react';  
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-blue-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span role="img" aria-label="lock" className="mr-2">🔐</span> Welcome Back
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-white text-white placeholder-black/70 border border-white/30 focus:outline-none focus:ring-2 ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              required
              className="w-full px-4 py-2 rounded-lg bg-white text-white placeholder-black/70 border border-white/30 focus:outline-none focus:ring-2 ring-indigo-300"
            />
          </div>

          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-yellow-300" />
              Remember me
            </label>
            <Link to="/forgot-password" className="hover:underline text-yellow-300">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-purple-800 font-bold rounded-lg hover:bg-yellow-100 transition-all duration-200"
          >
            🚀 Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account? <Link to="/register" className="text-yellow-300 font-medium hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
