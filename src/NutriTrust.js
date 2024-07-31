import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario
import Login from './Login'; // Importa el componente Login
// import './styles.css'

const NutriTrust = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/evnutricional'); // Redirige a la página EVNutricional
  };

  return (
    <div className="nutritrust-container">
      {isLoggedIn ? (
        <div className="welcome-container">
          <h2>Bienvenido a NutriTrust</h2>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default NutriTrust;
