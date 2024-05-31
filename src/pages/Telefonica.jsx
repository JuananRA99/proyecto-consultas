import React from 'react';
import { useNavigate } from 'react-router-dom';

function Telefonica() {
  const navigate = useNavigate();

  const manejarReserva = () => {
    navigate('/consulta-telefonica');
  };

  const manejarCompraPaquete = () => {
    navigate('/consulta-telefonica');
  };

  return (
    <div className="container mt-5">
      <h1>Consulta Telefónica</h1>
      <p>Descripción de la consulta telefónica.</p>
      <button className="btn btn-primary mt-3" onClick={manejarReserva}>Reservar Cita</button>
      <button className="btn btn-secondary mt-3 ml-2" onClick={manejarCompraPaquete}>Comprar Paquete</button>
    </div>
  );
}

export default Telefonica;