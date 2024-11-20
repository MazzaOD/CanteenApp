// Header.js
import React from 'react';

function Header({ restaurantName, setView }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md fixed top-0 w-full z-10">
      <h1 className="text-2xl font-bold text-orange-600 uppercase">{restaurantName}</h1>
      <button
        onClick={() => setView('login')}
        className="text-gray-600 font-semibold hover:text-orange-500"
      >
        Log Out
      </button>
    </header>
  );
}

export default Header;
