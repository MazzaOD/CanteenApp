import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // Function to add an item to the order
  const addItem = (newItem) => {
    setOrder((prevOrder) => {
      const existingItemIndex = prevOrder.findIndex((item) => item.name === newItem.name);
      if (existingItemIndex !== -1) {
        const updatedOrder = [...prevOrder];
        updatedOrder[existingItemIndex].quantity += newItem.quantity;
        return updatedOrder;
      } else {
        return [...prevOrder, newItem];
      }
    });
  };

  // Function to remove an item by index
  const removeItem = (index) => {
    setOrder((prevOrder) => prevOrder.filter((_, i) => i !== index));
  };

  // Function to clear the order after checkout
  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <OrderContext.Provider value={{ order, addItem, removeItem, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
