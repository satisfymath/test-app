import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Cargar el carrito desde localStorage al iniciar
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      setCart(storedCart || {}); // Maneja el caso null y undefined
    } catch (error) {
      console.error('Error loading cart from localStorage', error);
      setCart({});
    }
  }, []);

  useEffect(() => {
    // Guardar el carrito en localStorage cuando cambie
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1;
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        if (newCart[id].quantity > 1) {
          newCart[id].quantity -= 1;
        } else {
          delete newCart[id];
        }
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};