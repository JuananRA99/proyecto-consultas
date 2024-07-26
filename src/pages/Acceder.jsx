import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import './css/Acceder.css';

function Acceder({ setAuth, redirectPath, setRedirectPath, setIsAdmin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      console.log('Respuesta del servidor:', response);
      
      // Verifica que response.data tenga el formato esperado
      if (response && response.token) {
        const { token, isAdmin } = response;

        // guardar token en el local storage
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email);
        console.log('Token guardado en local storage:', localStorage.getItem('token'));
        console.log('Email guardado en local storage:', localStorage.getItem('userEmail'));

        // actualizar estado
        setAuth(true);
        setIsAdmin(isAdmin);
        console.log('Autenticación establecida:', true);
        console.log('Es administrador:', isAdmin);

        // redirect según rol del usuario
        if (isAdmin) {
          navigate('/paneladmin');
        } else {
          navigate(redirectPath || '/tu-area'); 
          setRedirectPath('/tu-area');
        }
      } else {
        console.error('Datos de respuesta inesperados:', response.data);
        setError('Datos de respuesta inesperados del servidor.');
      }
    } catch (error) {
      console.error('Error durante login:', error);
      setError('Email o contraseña incorrectos');
    }
  };

  const loginWithGoogle = async () => {
    const googleLoginUrl = "http://localhost:8080/api/v1/auth/login/google";
    const newWindow = window.open(googleLoginUrl, "_blank", "width=500,height=600");
    const timer = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(timer);
        checkAuthStatus();
      }
    }, 500);
  };

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/login', { withCredentials: true });
      if (response.status === 200 && response.data.user) {
        setAuth(true);
        setIsAdmin(response.data.user.isAdmin);
        localStorage.setItem('userEmail', response.data.user.email);
        navigate('/tu-area');
      }
    } catch (error) {
      console.error('Error al verificar el estado de autenticación:', error);
    }
  };

  return (
    <div className="login">
      <div className="container mt-5">
        <h2>Acceder</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="email">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
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
        <button className="login-with-google-btn" onClick={loginWithGoogle}>
          Accede con Google
        </button>
      </div>
    </div>
  );
}

Acceder.propTypes = {
  setAuth: PropTypes.func.isRequired,
  redirectPath: PropTypes.string,
  setRedirectPath: PropTypes.func.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
};

export default Acceder;
