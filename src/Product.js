// Product.js
import React from 'react';
import './Product.css';

const Product = ({ title, price, description, image, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">Precio: ${price}</p>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
