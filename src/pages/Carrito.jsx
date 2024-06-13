import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/Carrito.css';
const Carrito = ({ cartItems, removeFromCart, handleCloseCart }) => {
  return (
    <div className="carrito">
          <div className="carrito-header">
      <h2>Carrito</h2>
      <button className="btn btn-secondary close-button" onClick={handleCloseCart}>X</button>
      </div>
      {cartItems.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-left">
              {item.type} - {item.price}€
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Eliminar</button>
            </li>
          ))}
          {cartItems.length > 0 && (
            <Link to="/pasarela-pago" className="btn btn-primary" onClick={handleCloseCart}>Realizar Pago</Link>
          )}
        </ul>
      )}
    </div>
  );
};

Carrito.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  handleCloseCart: PropTypes.func.isRequired, // Nueva prop
};

export default Carrito;