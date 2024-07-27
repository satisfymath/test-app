import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'; // Asegúrate de importar los estilos

const Educaciones = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Curso de Nutrición', price: 100 },
    { id: 2, name: 'Seminario de Salud', price: 150 },
  ];

  return (
    <div>
      <h2>Educaciones</h2>
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

export default Educaciones;
