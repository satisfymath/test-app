import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './Home';
import Pautas from './Pautas';
import Portafolios from './Portafolios';
import EVNutricional from './EVNutricional';
import './App.css';
import barIcon from './baricon.png';
import FormularioProvider from './FormularioContext'; // Importa el proveedor del contexto

const App = () => {
  return (
    <FormularioProvider>
      <Router>
        <AppBar position="fixed" className="navbar">
          <Toolbar className="toolbar">
            <img src={barIcon} alt="Icono" className="app-icon" />
            <Typography variant="h6" className="app-title">
              Estudiemos Nutrición
            </Typography>
            <div className="nav-buttons">
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/pautas">Pautas</Button>
              <Button color="inherit" component={Link} to="/portafolios">Portafolios</Button>
              <Button color="inherit" component={Link} to="/evnutricional">EVNutricional</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Add a Toolbar to offset the fixed AppBar */}
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pautas" component={Pautas} />
            <Route path="/portafolios" component={Portafolios} />
            <Route path="/evnutricional" component={EVNutricional} />
          </Switch>
        </Container>
      </Router>
    </FormularioProvider>
  );
};

export default App;
