import  { useState } from 'react';
import PropTypes from 'prop-types';
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
      const response = await loginUser(userData);
      const userData = { email, password };
      const { token, isAdmin } = response.data;

      // Guardar el token en localStorage
      localStorage.setItem('token', token);
      setAuth(true);
      setIsAdmin(isAdmin);

      // Redirigir según el rol del usuario
      if (isAdmin) {
        navigate('/paneladmin');
      } else {
        navigate(redirectPath);
        setRedirectPath('/tu-area'); // Restablecer ruta de redirección por defecto
      }
    } catch (error) {
      setError('Email o contraseña incorrectos');
    }
  };
/*
    // Obtener las credenciales guardadas
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { email: storedEmail, password: storedPassword, isAdmin } = user;
      // Autenticación básica
      if (email === storedEmail && password === storedPassword) {
        setAuth(true);
        setIsAdmin(isAdmin); // Establecer isAdmin en el estado
        localStorage.setItem('userEmail', email); // Guardar email en localStorage
        if (isAdmin) {
          navigate('/paneladmin');
        } else {
          navigate(redirectPath);
          setRedirectPath('/tu-area'); // Restablecer ruta de redirección por defecto
        }
      } else {
        setError('Email o contraseña incorrectos');
      }
    } else {
      setError('No se encontró ningún usuario registrado con estas credenciales.');
    }
  };

  */
  const loginwithgoogle = async () => {
    const googleLoginUrl = "http://localhost:8080/api/v1/auth/login/google";
    const newWindow = window.open(googleLoginUrl, "_blank", "width=500,height=600");

    const checkAuthStatus = async () => {
      try {
        const response = await api.get('/auth/login/success', { withCredentials: true });
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

    const timer = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(timer);
        checkAuthStatus();
      }
    }, 500);
  }

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
      <button className='login-with-google-btn' onClick={loginwithgoogle}>
      Accede con Google
    </button>
    </div>
    </div>
  );
}

Acceder.propTypes = {
  setAuth: PropTypes.func,
  redirectPath: PropTypes.string,
  setRedirectPath: PropTypes.func,
  setIsAdmin: PropTypes.func,
}
export default Acceder;
