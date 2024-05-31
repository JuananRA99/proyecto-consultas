import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registrarse({ setAuth }) {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();

    // Validar el nombre de usuario
    const nombreRegex = /^[a-zA-Z0-9_]+$/;
    if (!nombreRegex.test(nombreUsuario)) {
      setNombreError('El nombre de usuario solo puede contener letras, números y guiones bajos.');
      return;
    } else {
      setNombreError('');
    }

    // Validar la contraseña
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      return;
    } else {
      setPasswordError('');
    }

    // Validar la coincidencia de contraseña
    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
      return;
    } else {
      setConfirmPasswordError('');
    }

    // Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Introduce un email válido.');
      return;
    } else {
      setEmailError('');
    }

    // Guardar el usuario en localStorage
    const userData = {
      nombreUsuario,
      email,
      password
    };
    localStorage.setItem('user', JSON.stringify(userData));

    // Lógica para manejar el registro (puedes sustituirlo con la lógica real)
    setAuth(true);
    alert('Te has registrado correctamente.');
    navigate('/tu-area');
  };

  return (
    <div className="container mt-5">
      <h1>Registrarse</h1>
      <form onSubmit={manejarRegistro}>
        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          {nombreError && <p className="text-danger">{nombreError}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label>Repetir Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
        </div>
    
        <div className="form-group mt-4">
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default Registrarse;
