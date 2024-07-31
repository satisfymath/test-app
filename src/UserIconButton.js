import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Importa el ícono de Material-UI

const UserIconButton = () => (
  <IconButton component={Link} to="/user" color="inherit">
    <AccountCircleIcon style={{ width: 24, height: 24 }} />
  </IconButton>
);

export default UserIconButton;
