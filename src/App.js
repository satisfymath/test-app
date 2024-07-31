import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
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
  return (
    <FormularioProvider>
      <CartProvider>
        <Router basename="/test-app">
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
              <Route exact path="/" component={Home} />
              <Route path="/educaciones" component={Educaciones} />
              <Route path="/portafolios" component={Portafolios} />
              <Route path="/evnutricional" component={EVNutricional} />
              <Route path="/cart" component={Cart} />
              {/* Redirige cualquier ruta no definida a la página de inicio */}
              <Redirect to="/" />
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    </FormularioProvider>
  );
};

export default App;
