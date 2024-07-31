import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './Home';
import Educaciones from './Educaciones';
import Portafolios from './Portafolios';
import EVNutricional from './EVNutricional';
import Cart from './Cart';
import './App.css';
import barIcon from './baricon.png';
import FormularioProvider from './FormularioContext';
import { CartProvider } from './CartContext'; // Asegúrate de que la ruta es correcta
import CartIconButton from './CartIconButton'; // Asegúrate de que la ruta es correcta

const App = () => {
  console.log('Rendering App component');

  return (
    <FormularioProvider>
      <CartProvider>
        <Router>
          <AppBar position="fixed" className="navbar">
            <Toolbar className="toolbar">
              <img src={barIcon} alt="Icono" className="app-icon" />
              <Typography variant="h6" className="app-title">
                Estudiemos Nutrición
              </Typography>
              <div className="nav-buttons">
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/educaciones">Educaciones</Button>
                <Button color="inherit" component={Link} to="/portafolios">Portafolios</Button>
                <Button color="inherit" component={Link} to="/evnutricional">EVNutricional</Button>
                <CartIconButton /> {/* Aquí se agrega el CartIconButton */}
              </div>
            </Toolbar>
          </AppBar>
          <Toolbar /> {/* Add a Toolbar to offset the fixed AppBar */}
          <Container>
            <Switch>
              <Route exact path="/" render={() => {
                console.log('Navigating to Home');
                return <Home />;
              }} />
              <Route path="/educaciones" render={() => {
                console.log('Navigating to Educaciones');
                return <Educaciones />;
              }} />
              <Route path="/portafolios" render={() => {
                console.log('Navigating to Portafolios');
                return <Portafolios />;
              }} />
              <Route path="/evnutricional" render={() => {
                console.log('Navigating to EVNutricional');
                return <EVNutricional />;
              }} />
              <Route path="/cart" render={() => {
                console.log('Navigating to Cart');
                return <Cart />;
              }} />
              {/* Redirige cualquier ruta no definida a una URL externa */}
              <Route path="*" render={() => {
                console.log('Redirecting to external URL');
                window.location.href = 'https://satisfymath.github.io/test-app/build/';
                return null; // No renderiza nada ya que se está redirigiendo
              }} />
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    </FormularioProvider>
  );
};

export default App;
