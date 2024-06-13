import PropTypes from 'prop-types';
import Calendario from "./Calendario";

const Consultas = ({ addToCart }) => {
  const handleReserve = () => {
    addToCart ({ type: 'Consulta', price: 60 });
  };

  const handleBuy = () => {
    addToCart({ type: 'Bono (4 sesiones)', price: 210 });
  };

  return (
    <div className="container mt-5">
       <div className="d-flex align-items-center mb-3">
         <h1>Consulta Online</h1>
         <Calendario/>
      </div>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Consulta única</h5>
            <p className="card-text">Precio: 60€</p>
            <button className="btn btn-primary" onClick={handleReserve}>Comprar</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Paquete de 4 Consultas</h5>
            <p className="card-text">Precio: 210€</p>
            <button className="btn btn-primary" onClick={handleBuy}>Comprar</button>
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