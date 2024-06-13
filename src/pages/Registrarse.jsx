
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Registrarse({ setAuth, setIsAdmin: setAdminStatus, redirectPath, setRedirectPath }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
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

    const user = {
      email,
      username,
      password,
      isAdmin,
    };

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userEmail', email); // Guardar email en localStorage
    setAuth(true);
    setAdminStatus(isAdmin);
    if (isAdmin) {
      navigate('/paneladmin');
    } else {
      navigate(redirectPath);
    }
    setRedirectPath('/tu-area');
  };

  return (
    <div className="container mt-5">
      <h1>Registrarse</h1>
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
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            Registrarse como Admin
          </label>
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">
          Registrarse
        </button>
      </form>
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