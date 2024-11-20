// src/components/Menu.js
import React, { useContext, useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import HotDrinks from './HotDrinks';
import ColdDrinks from './ColdDrinks';
import Food from './Food';
import Cart from './Cart';

function Menu() {
  const [view, setView] = useState('banner');

  return (
    <div>
      <Header setView={setView} />
      {view === 'banner' && <Banner setView={setView} />}
      {view === 'hotdrinks' && <HotDrinks />}
      {view === 'colddrinks' && <ColdDrinks />}
      {view === 'food' && <Food />}
      <Cart />
    </div>
  );
}

export default Menu;
