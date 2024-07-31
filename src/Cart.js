import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartProduct from './CartProduct';
import './Cart.css';

const Cart = () => {
  // Obtener el contexto del carrito
  const { cart, removeFromCart } = useContext(CartContext);

  // Agrupar los productos por id y calcular la cantidad total
  const groupedCart = Object.values(cart).reduce((acc, item) => {
    const existingItem = acc.find(product => product.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  // Calcular el total
  const total = groupedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul className="cart-list">
        {groupedCart.map((item) => (
          <li key={item.id} className="cart-list-item">
            <CartProduct
              product={item}
              quantity={item.quantity}
              removeFromCart={removeFromCart}
            />
          </li>
        ))}
      </ul>
      <button className="pay-button">
        Pagar con Webpay - Total: ${total.toFixed(2)}
      </button>
    </div>
  );
};

export default Cart;
