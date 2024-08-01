import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const WindowProduct = ({ id, title, price, description, images }) => {
  const { addToCart } = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image: images[currentImageIndex] });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="product">
      <img src={images[currentImageIndex]} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-info">
        <p className="product-price">Precio: ${price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
        <button className="next-image-btn" onClick={handleNextImage}>
          Siguiente Imagen
        </button>
      </div>
    </div>
  );
};

export default WindowProduct;
