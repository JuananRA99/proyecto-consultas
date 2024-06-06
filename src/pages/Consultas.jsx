import React from 'react';

const Consultas = ({ addToCart }) => {
  const handleReserve = () => {
    addToCart ({ type: 'Consulta', price: 60 });
  };

  const handleBuy = () => {
    addToCart({ type: 'Bono (4 sesiones)', price: 210 });
  };

  return (
    <div className="container mt-5">
      <h1>Consulta Online</h1>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reservar Cita</h5>
            <p className="card-text">Precio: 60€</p>
            <button className="btn btn-primary" onClick={handleReserve}>Reservar Cita</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprar Paquete</h5>
            <p className="card-text">Precio: 210€</p>
            <button className="btn btn-secondary" onClick={handleBuy}>Comprar Paquete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultas;