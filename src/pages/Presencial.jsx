import React from 'react';
import { useNavigate } from 'react-router-dom';

function Presencial() {
  const navigate = useNavigate();

  const manejarReserva = () => {
    navigate('/consulta-presencial');
  };

  const manejarCompraPaquete = () => {
    navigate('/consulta-presencial');
  };

  return (
    <div className="container mt-5">
      <h1>Consulta Presencial</h1>
      <p>Descripción de la consulta presencial.</p>
      <button className="btn btn-primary mt-3" onClick={manejarReserva}>Reservar Cita</button>
      <button className="btn btn-secondary mt-3 ml-2" onClick={manejarCompraPaquete}>Comprar Paquete</button>
    </div>
  );
}

export default Presencial;