// src/components/Cart.js
import React, { useContext } from 'react';
import { OrderContext } from '../OrderContext';

function Cart() {
  const { cart } = useContext(OrderContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
