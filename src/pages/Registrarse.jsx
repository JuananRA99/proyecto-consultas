import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

import './css/Registrarse.css';

function Registrarse({ setAuth, setIsAdmin, redirectPath, setRedirectPath }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un email válido.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    try {
      const userData = {
        email,
        name, // Cambio de username a name
        password,
        isAdmin: false,
      };

      const response = await registerUser(userData);
      console.log('Usuario registrado:', response);

      setAuth(true);
      setIsAdmin(userData.isAdmin);
      localStorage.setItem('userEmail', email);
      navigate(redirectPath);
      setRedirectPath('/tu-area');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al registrar usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="registro">
      <div className="container mt-5">
        <h2>Registrarse</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="name">Nombre de Usuario</label> {/* Cambio de username a name */}
            <input
              type="text"
              className="form-control"
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} // Cambio de username a name
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button type="submit" className="btn btn-primary mt-3">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

Registrarse.propTypes = {
  setAuth: PropTypes.func.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
  setRedirectPath: PropTypes.func.isRequired,
};

export default Registrarse;
