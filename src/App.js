import React, { useState } from 'react';
import { OrderProvider } from './OrderContext';
import HotDrinks from './Components/HotDrinks';
import ColdDrinks from './Components/ColdDrinks';
import Food from './Components/Food';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Login from './Components/Login';
import OrderSummary from './Components/OrderSummary';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = [
  { name: "Log Out", link: "#", type: "link" },
];

function App() {
  const [view, setView] = useState('login');

  return (
    <OrderProvider>
      <div className="App bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 min-h-screen text-gray-800 w-full">
        <Header className="w-full fixed top-0 left-0 bg-yellow-500 text-white shadow-xl" restaurantName="ATU Canteen" menuItems={menuItems} setView={setView} />
        
        <div className="pt-16"> {/* Prevents content overlap with fixed header */}
          {view === 'login' && <Login setView={setView} />}
          
          {view === 'banner' && (
            <div className="bg-orange-500 py-20">
              <Banner
                title="Fast food, made fresh"
                subtitle="Explore Our Menu"
                imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
                setView={() => setView('menu')}
              />
            </div>
          )}

          {view === 'menu' && (
            <div className="container mx-auto my-4 px-4">
              <div className="menu-container flex flex-col lg:flex-row gap-6 mt-4">
                <div className="menu-items lg:w-2/3">
                  <h2 className="text-5xl font-extrabold text-center text-orange-700 mb-6">Canteen Menu</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                      onClick={() => setView('hotdrinks')}
                      className="cursor-pointer bg-yellow-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-500"
                    >
                      <img src="/assets/hot-drinks.jpg" alt="Hot Drinks" className="w-full h-56 object-cover" />
                      <div className="p-4 bg-yellow-400">
                        <h5 className="text-2xl font-bold text-gray-800">Hot Drinks</h5>
                      </div>
                    </div>
                    <div
                      onClick={() => setView('colddrinks')}
                      className="cursor-pointer bg-yellow-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-500"
                    >
                      <img src="/assets/cold-drinks.jpg" alt="Cold Drinks" className="w-full h-56 object-cover" />
                      <div className="p-4 bg-yellow-400">
                        <h5 className="text-2xl font-bold text-gray-800">Cold Drinks</h5>
                      </div>
                    </div>
                    <div
                      onClick={() => setView('food')}
                      className="cursor-pointer bg-yellow-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-500"
                    >
                      <img src="/assets/food.jpeg" alt="Food" className="w-full h-56 object-cover" />
                      <div className="p-4 bg-yellow-400">
                        <h5 className="text-2xl font-bold text-gray-800">Hot Food</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-summary-container lg:w-1/3 bg-white shadow-xl p-6 rounded-lg border-2 border-yellow-400">
                  <OrderSummary setView={setView} />
                </div>
              </div>
            </div>
          )}

          {view === 'hotdrinks' && <HotDrinks setView={setView} />}
          {view === 'colddrinks' && <ColdDrinks setView={setView} />}
          {view === 'food' && <Food setView={setView} />}
          {view === 'checkout' && <Checkout setView={setView} />}
        </div>
      </div>
    </OrderProvider>
  );
}

export default App;
