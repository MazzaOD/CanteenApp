import React, { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../OrderContext';

function Food({ setView }) {
  const { addItem } = useContext(OrderContext);
  const [foodItems, setFoodItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState(''); // State for notification message

  useEffect(() => {
    fetch('/assets/food.json')
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error loading food items:', error));
  }, []);

  const handleOrder = (item, index) => {
    const quantity = quantities[index] || 1;
    addItem({ name: item.name, price: item.price, quantity });
    setMessage(`Added ${item.name} to cart!`);
  
    // Reset the quantity to 1 after adding to the cart
    setQuantities((prev) => ({ ...prev, [index]: 1 }));
  
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  const increaseQuantity = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: (prev[index] || 1) + 1 }));
  };

  const decreaseQuantity = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) - 1),
    }));
  };

  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Food</h2>
      {message && <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg mb-4">{message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-900 mb-2">{item.name}</h5>
              <p className="text-lg text-gray-600">Price: €{item.price.toFixed(2)}</p>
              <div className="flex justify-center items-center mt-4 mb-6 space-x-4">
                <button className="px-3 py-1 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => decreaseQuantity(index)}>-</button>
                <span className="text-xl font-semibold text-gray-900">{quantities[index] || 1}</span>
                <button className="px-3 py-1 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600" onClick={() => handleOrder(item, index)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200" onClick={() => setView('menu')}>
        Back to Menu
      </button>
    </div>
  );
}

export default Food;
