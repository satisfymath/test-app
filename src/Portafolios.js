// Portafolios.js
import React, { useContext } from 'react';
import './Home.css'; // Asegúrate de que este archivo CSS esté correctamente configurado
import Product from './Product'; // Asegúrate de que la ruta es correcta
import { CartContext } from './CartContext'; // Asegúrate de que la ruta es correcta
import products from './products.json'; // Asegúrate de que la ruta es correcta

const Portafolios = () => {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="home-container"> {/* Puedes cambiar el nombre de la clase si lo prefieres */}
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="category-section">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="products-grid">
            {Object.entries(items).map(([id, item]) => (
              <Product
                key={id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={process.env.PUBLIC_URL + '/' + item.image} // Asegúrate de que las imágenes estén accesibles
                addToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portafolios;
