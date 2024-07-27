import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'; // Asegúrate de importar los estilos

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Implementa el pago con Webpay aquí')}>Pagar con Webpay</button>
    </div>
  );
};

export default Cart;
