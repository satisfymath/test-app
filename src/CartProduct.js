import React from 'react';
import './CartProduct.css';

const CartProduct = ({ product, quantity, removeFromCart }) => {
  const handleRemove = () => {
    for (let i = 0; i < product.quantity; i++) {
      removeFromCart(product.id);
      break;
    }
  };

  return (
    <div className="cart-product">
      <img src={product.image} alt={product.title} className="cart-product-image" />
      <div className="cart-product-info">
        <h3 className="cart-product-title">{product.title}</h3>
        <p className="cart-product-price">Precio: ${product.price}</p>
        <p className="cart-product-quantity">Cantidad: {quantity}</p>
        <button className="remove-from-cart-btn" onClick={handleRemove}>X</button>
      </div>
    </div>
  );
};

export default CartProduct;
