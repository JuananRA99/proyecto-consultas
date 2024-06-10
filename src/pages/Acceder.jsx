import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Acceder({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
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

    // Obtener las credenciales guardadas
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { email: storedEmail, password: storedPassword } = user;
      // Simulación de autenticación básica
      if (email === storedEmail && password === storedPassword) {
        setAuth(true);
        navigate('/tu-area');
      } else {
        setError('Email o contraseña incorrectos');
      }
    } else {
      setError('No se encontró ningún usuario registrado con estas credenciales.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Acceder</h1>
      <form onSubmit={handleLogin}>
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
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">
          Iniciar sesión
        </button>
        <Link to="/nuevo-password" className="btn btn-link mt-3">
          ¿Olvidaste tu contraseña?
        </Link>
      </form>
    </div>
  );
}

export default Acceder;