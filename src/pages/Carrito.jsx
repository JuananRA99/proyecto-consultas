import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Carrito = ({ cartItems, removeFromCart }) => {


  return (
    <div className="carrito">
      <h2>Carrito</h2>
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
              <Link to="/pasarela-pago" className="btn btn-primary">Realizar Pago</Link>
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
};

export default Carrito;