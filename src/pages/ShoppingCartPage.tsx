import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCartPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.images[0]} alt={product.title} style={{ width: '50px' }} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCartPage;
