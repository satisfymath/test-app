import React, { useState } from 'react';
import nutritrustlogo from './nutritrustlogo.png'; // Asegúrate de que esta ruta sea correcta

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Arrt' && password === '1998') {
      onLogin(); // Llama a la función onLogin si las credenciales son correctas
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-form">
      <img src={nutritrustlogo} alt="NutriTrust Logo" className="logo" />
      <h3>Bienvenido a NutriTrust</h3>
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
