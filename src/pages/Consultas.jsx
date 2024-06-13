import PropTypes from 'prop-types';
import './css/Consultas.css';

const Consultas = ({ addToCart }) => {
  const handleReserve = () => {
    addToCart({ type: 'Consulta', price: 60 });
  };

  const handleBuy = () => {
    addToCart({ type: 'Bono (4 sesiones)', price: 210 });
  };

  return (
    <div className="consultas">
      <div className="container mt-5">
        <h2 className='online'>Consulta Online</h2>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Reservar Cita</h4>
              <p className="card-text">Precio: 60€</p>
              <button className="btn btn-primary" onClick={handleReserve}>Comprar</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Comprar Paquete</h4>
              <p className="card-text">Precio: 210€</p>
              <button className="btn btn-primary" onClick={handleBuy}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Consultas.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Consultas;