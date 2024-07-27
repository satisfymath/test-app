import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Badge } from '@mui/material';
import Home from './Home';
import Educaciones from './Educaciones';
import Portafolios from './Portafolios';
import EVNutricional from './EVNutricional';
import Cart from './Cart';
import './App.css';
import barIcon from './baricon.png';
import FormularioProvider from './FormularioContext'; // Importa el proveedor del contexto
import { CartProvider, CartContext } from './CartContext'; // Importa el proveedor del carrito y el contexto
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importa el icono de carrito

const App = () => {
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
                <CartIconButton />
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
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    </FormularioProvider>
  );
};

const CartIconButton = () => {
  const { cart } = useContext(CartContext);

  return (
    <IconButton color="inherit" component={Link} to="/cart">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default App;

