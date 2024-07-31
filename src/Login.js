// src/Login.js
import React, { useState } from 'react';
import nutritrustlogo from './nutritrustlogo.png'; // Importa el logo
import './NutriTrust.css'; // Importa el archivo CSS

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    if (username === 'Arrt' && password === '1998') {
      if (typeof onLogin === 'function') {
        onLogin(); // Llama a la función onLogin si las credenciales son correctas
      } else {
        console.error('onLogin prop is not a function');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <img src={nutritrustlogo} alt="NutriTrust Logo" className="logo" />
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
