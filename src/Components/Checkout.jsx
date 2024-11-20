import React, { useContext, useState, useEffect } from 'react';
import { OrderContext } from '../OrderContext';

function Checkout({ setView }) {
  const { order, clearOrder, removeItem } = useContext(OrderContext);
  const [total, setTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const calculateTotal = () => {
    const totalPrice = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const generateOrderNumber = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomNum);
  };

  useEffect(() => {
    calculateTotal();
    generateOrderNumber();
  }, [order]);

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
  };

  const handleBackToMenu = () => {
    clearOrder();
    setView('menu');
  };

  return (
    <div className="container mx-auto my-10 px-4">
      {!isConfirmed ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Checkout</h2>
          <p className="text-center text-gray-600 mb-4">Order Number: {orderNumber}</p>
          <h4 className="text-lg font-semibold mb-4">Your Items:</h4>
          <ul className="mb-4">
            {order.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
                <span>{item.name} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}</span>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4 className="text-2xl font-semibold text-right">Total Bill: €{total.toFixed(2)}</h4>
          <div className="text-center mt-6">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold mr-2 hover:bg-blue-600" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <button className="bg-gray-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-600" onClick={() => setView('menu')}>
              Back to Menu
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h2>
          <p>Your order number is: <span className="font-bold text-gray-800">{orderNumber}</span></p>
          <p className="text-xl font-semibold text-gray-700 mt-4">Total Bill: €{total.toFixed(2)}</p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold mt-6 hover:bg-green-600" onClick={handleBackToMenu}>
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
