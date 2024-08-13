import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const User = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [createUsername, setCreateUsername] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      navigate('/userpage');
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    localStorage.setItem('username', createUsername);
    localStorage.setItem('password', createPassword);
    navigate('/createaccountpage');
  };

  const handleGoogleLoginSuccess = (response) => {
    // Aquí puedes obtener información del perfil del usuario
    const profile = response.profileObj;
    const { email, familyName, givenName, googleId, name } = profile;

    // Guardar la información del usuario en localStorage
    localStorage.setItem('user', JSON.stringify({
      id: googleId,
      name: name,
      givenName: givenName,
      familyName: familyName,
      email: email,
    }));

    // Redirige al usuario a la página de inicio después de crear la cuenta o iniciar sesión
    navigate('/userpage');
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          style={{ marginTop: '20px' }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default User;

