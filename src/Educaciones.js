import React, { useContext } from 'react';
import './Home.css'; // Asegúrate de que este archivo CSS esté correctamente configurado
import Product from './Product'; // Asegúrate de que la ruta es correcta
import { CartContext } from './CartContext'; // Asegúrate de que la ruta es correcta
import educaciones from './educaciones.json'; // Asegúrate de que la ruta es correcta

const Educaciones = () => {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="home-container"> {/* Puedes cambiar el nombre de la clase si lo prefieres */}
      <div className="category-section">
        <h2>Educaciones</h2>
        <div className="products-grid">
          {Object.entries(educaciones.educaciones).map(([id, item]) => (
            <Product
              key={id}
              id={id} // Asegúrate de pasar el id si es necesario en el componente Product
              title={item.title}
              price={item.price}
              description={item.description}
              image={process.env.PUBLIC_URL + '/' + item.image} // Asegúrate de que las imágenes estén accesibles
              addToCart={() => handleAddToCart({ id, title: item.title, price: item.price, image: item.image })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educaciones;
