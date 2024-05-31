import React from 'react';

function ConsultaPresencial() {
  const manejarReserva = () => {
    // Lógica para manejar la reserva
    alert('Has reservado una cita presencial por 70€.');
  };

  const manejarCompraPaquete = () => {
    // Lógica para manejar la compra de paquete
    alert('Has comprado un paquete de consultas presenciales por 240€.');
  };

  return (
    <div className="container mt-5">
      <h1>Consulta Presencial</h1>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reservar Cita</h5>
            <p className="card-text">Precio: 70€</p>
            <button className="btn btn-primary" onClick={manejarReserva}>Reservar Cita</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprar Paquete</h5>
            <p className="card-text">Precio: 240€</p>
            <button className="btn btn-secondary" onClick={manejarCompraPaquete}>Comprar Paquete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultaPresencial;