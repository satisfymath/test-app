import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'; // Asegúrate de importar los estilos

const Portafolios = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Portafolio 1', price: 200 },
    { id: 2, name: 'Portafolio 2', price: 300 },
  ];

  return (
    <div>
      <h2>Portafolios</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Añadir al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portafolios;
