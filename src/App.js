import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './Home';
import Tablas from './Tablas';
import Libros from './Libros';
import Contacto from './Contacto';
import './App.css';
import barIcon from './baricon.png';

const App = () => {
  return (
    <Router>
      <AppBar position="fixed" className="navbar">
        <Toolbar className="toolbar">
          <img src={barIcon} alt="Icono" className="app-icon" />
          <Typography variant="h6" className="app-title">
            Estudiemos Nutrición
          </Typography>
          <div className="nav-buttons">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/tablas">Tablas</Button>
            <Button color="inherit" component={Link} to="/libros">Libros</Button>
            <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Add a Toolbar to offset the fixed AppBar */}
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tablas" component={Tablas} />
          <Route path="/libros" component={Libros} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;



