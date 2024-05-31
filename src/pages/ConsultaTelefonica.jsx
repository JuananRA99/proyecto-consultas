import React from 'react';

function ConsultaTelefonica() {
  const manejarReserva = () => {
    // Lógica para manejar la reserva
    alert('Has reservado una cita telefónica por 50€.');
  };

  const manejarCompraPaquete = () => {
    // Lógica para manejar la compra de paquete
    alert('Has comprado un paquete de consultas telefónicas por 180€.');
  };

  return (
    <div className="container mt-5">
      <h1>Consulta Telefónica</h1>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reservar Cita</h5>
            <p className="card-text">Precio: 50€</p>
            <button className="btn btn-primary" onClick={manejarReserva}>Reservar Cita</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprar Paquete</h5>
            <p className="card-text">Precio: 180€</p>
            <button className="btn btn-secondary" onClick={manejarCompraPaquete}>Comprar Paquete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultaTelefonica;