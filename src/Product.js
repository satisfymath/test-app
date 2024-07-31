import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Product.css';

const Product = ({ id, title, price, description, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">Precio: ${price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default Product;