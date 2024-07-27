import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      updatedCart.splice(itemIndex, 1);
    }
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
