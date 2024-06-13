import { useState } from 'react';
import './css/NuevoPassword.css';
function NuevoPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un email válido.');
      setSuccess('');
      return;
    }
    // Simulación de envío de email para restablecer contraseña
    localStorage.setItem('resetEmail', email);
    setSuccess('Se ha enviado un enlace para restablecer tu contraseña.');
    setError('');
  };

  return (
    <div className="password">
    <div className="container mt-5">
      <h2>Solicitar nueva contraseña</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
        <button type="submit" className="btn btn-primary mt-4">
          Solicitar nueva contraseña
        </button>
      </form>
    </div>
    </div>
  );
}

export default NuevoPassword;