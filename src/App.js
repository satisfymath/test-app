import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './Home';
import Educaciones from './Educaciones';
import Portafolios from './Portafolios';
import NutriTrust from './NutriTrust';
import EVNutricional from './EVNutricional';
import Cart from './Cart';
import User from './User';
import UserIconButton from './UserIconButton';
import CartIconButton from './CartIconButton';
import './styles.css';
import './Figurethemes.css';
import barIcon from './baricon.png';
import nutritrusticon from './nutritrusticon.png';
import { FormularioProvider } from './FormularioContext';
import { CartProvider } from './CartContext';
import { AccountProvider } from './AccountContext';

const App = () => {
  useEffect(() => {
    localStorage.setItem('formulario', JSON.stringify(null));
    localStorage.setItem('cart', JSON.stringify(null));
    localStorage.setItem('account', JSON.stringify(null));
  }, []);

  console.log('Rendering App component');

  return (
    <FormularioProvider>
      <CartProvider>
        <AccountProvider>
          <Router>
            <AppBar
              sx={{ backgroundColor: 'd6aaffc5' }} className="navbar" // Aplica el color de fondo aquí
            >
              <Toolbar className="toolbar">
                <img src={barIcon} alt="Icono" className="app-icon" />
                <Typography variant="h6" className="app-title">
                  Estudiemos Nutrición
                </Typography>
                <div className="nav-buttons">
                  <Button color="inherit" component={Link} to="/">Home</Button>
                  <Button color="inherit" component={Link} to="/educaciones">Educaciones</Button>
                  <Button color="inherit" component={Link} to="/portafolios">Portafolios</Button>
                  <Button color="inherit" component={Link} to="/nutritrust">
                    <img src={nutritrusticon} alt="NutriTrust" className="nutritrust-icon" />
                  </Button>
                  <UserIconButton /> {/* Añade el botón de usuario */}
                  <CartIconButton /> {/* Aquí se agrega el CartIconButton */}
                </div>
              </Toolbar>
            </AppBar>
            <Toolbar /> {/* Add a Toolbar to offset the fixed AppBar */}
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/educaciones" element={<Educaciones />} />
                <Route path="/portafolios" element={<Portafolios />} />
                <Route path="/nutritrust" element={<NutriTrust />} />
                <Route path="/evnutricional" element={<EVNutricional />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/user" element={<User />} /> {/* Añade la ruta User */}
                <Route path="*" element={() => {
                  window.location.href = 'https://satisfymath.github.io/test-app/build/';
                  return null;
                }} />
              </Routes>
            </Container>
          </Router>
        </AccountProvider>
      </CartProvider>
    </FormularioProvider>
  );
}

export default App;
