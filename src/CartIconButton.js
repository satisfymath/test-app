import React, { useContext } from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext'; // Asegúrate de que la ruta es correcta
import { Link } from 'react-router-dom'; // Asegúrate de que la ruta es correcta

const CartIconButton = () => {
  const { cart } = useContext(CartContext);

  // Calcular el número total de productos en el carrito
  const itemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton color="inherit" component={Link} to="/cart">
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIconButton;
