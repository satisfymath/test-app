import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [createUsername, setCreateUsername] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const navigate = useNavigate(); // Cambiado de useHistory a useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticación (simulada aquí)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      navigate('/userpage'); // Redirige a UserPage
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Lógica para crear una cuenta (simulada aquí)
    localStorage.setItem('username', createUsername);
    localStorage.setItem('password', createPassword);
    // Simula el registro y redirige a CreateAccountPage
    navigate('/createaccountpage');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <h2>Crear cuenta</h2>
      <form onSubmit={handleCreateAccount} style={{ display: 'inline-block' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={createUsername}
            onChange={(e) => setCreateUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={createEmail}
            onChange={(e) => setCreateEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default User;
