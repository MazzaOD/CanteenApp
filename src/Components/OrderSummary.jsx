import React, { useContext } from 'react';
import { OrderContext } from '../OrderContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderSummary({ setView }) {
  const { order } = useContext(OrderContext); // Use 'order' as the item list

  // Calculate total cost
  const total = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h5>Order Summary</h5>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group mb-3">
          {order.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name} (x{item.quantity})</span>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <h6>Total: €{total.toFixed(2)}</h6>
      <button className="btn btn-success mt-2 w-100" onClick={() => setView('checkout')}>
        Checkout
      </button>
    </div>
  );
}

export default OrderSummary;
