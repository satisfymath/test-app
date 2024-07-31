import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario
import Login from './Login'; // Importa el componente Login

const NutriTrust = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/evnutricional'); // Redirige a la página EVNutricional
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Bienvenido a NutriTrust</h2>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default NutriTrust;
