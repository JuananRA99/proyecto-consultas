import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendario from './Calendario';

function Videollamada() {
  const navigate = useNavigate();

  const manejarReserva = () => {
    navigate('/consulta-videollamada');
  };

  const manejarCompraPaquete = () => {
    navigate('/consulta-videollamada');
  };

  return (
    <><div className="container mt-5">
      <h1>Consulta por Videollamada</h1>
      <p>Descripción de la consulta por videollamada.</p>
      <button className="btn btn-primary mt-3" onClick={manejarReserva}>Reservar Cita</button>
      <button className="btn btn-secondary mt-3 ml-2" onClick={manejarCompraPaquete}>Comprar Paquete</button>
    </div><Calendario /></>
  );
}

export default Videollamada;