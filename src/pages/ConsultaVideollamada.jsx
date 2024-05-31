import React from 'react';

function ConsultaVideollamada() {
  const manejarReserva = () => {
    // Lógica para manejar la reserva
    alert('Has reservado una cita por videollamada por 60€.');
  };

  const manejarCompraPaquete = () => {
    // Lógica para manejar la compra de paquete
    alert('Has comprado un paquete de consultas por videollamada por 210€.');
  };

  return (
    <div className="container mt-5">
      <h1>Consulta por Videollamada</h1>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reservar Cita</h5>
            <p className="card-text">Precio: 60€</p>
            <button className="btn btn-primary" onClick={manejarReserva}>Reservar Cita</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprar Paquete</h5>
            <p className="card-text">Precio: 210€</p>
            <button className="btn btn-secondary" onClick={manejarCompraPaquete}>Comprar Paquete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultaVideollamada;