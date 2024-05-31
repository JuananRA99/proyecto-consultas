import React from 'react';
import { useNavigate } from 'react-router-dom';

function AreaPersonal({ auth }) {
  const navigate = useNavigate();

  // Redirigir a la página de inicio de sesión si no está autenticado
  React.useEffect(() => {
    if (!auth) {
      navigate('/acceder');
    }
  }, [auth, navigate]);

  return (
    <div className="container mt-5">
      <h1>Área Personal</h1>
      {auth ? (
        <p>Bienvenido13443413 a tu área personal. Aquí puedes gestionar tu cuenta y tus consultas.</p>
      ) : (
        <p>Redirigiendo a la página de inicio de sesión...</p>
      )}
    </div>
  );
}

export default AreaPersonal;