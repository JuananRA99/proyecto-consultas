import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './css/Acceder.css';

function Acceder({ setAuth, redirectPath, setRedirectPath, setIsAdmin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validación básica de email y contraseña
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un email válido.');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    try {
      const credentials = { email, password };
      const response = await axios.post('/api/user/Acceder', credentials);
      console.log('Usuario ha iniciado sesión:', response.data);

      setAuth(true);
      setIsAdmin(response.data.isAdmin); // Establecer isAdmin en el estado según la respuesta del backend
      localStorage.setItem('userEmail', email); // Guardar email en localStorage
      navigate(redirectPath);
      setRedirectPath('/tu-area'); // Restablecer ruta de redirección por defecto

    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data.message);
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login">
      <div className="container mt-5">
        <h2>Acceder</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className='email'>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='email'>Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="sesion">
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <button type="submit" className="btn btn-primary mt-3">
              Iniciar sesión
            </button>
            <Link to="/nuevo-password" className="btn btn-link mt-3">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

Acceder.propTypes = {
  setAuth: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
  setRedirectPath: PropTypes.func.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
};

export default Acceder;