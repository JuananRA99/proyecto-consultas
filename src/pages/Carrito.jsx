import React from 'react';

const Carrito = ({ cartItems, removeFromCart }) => {
  const handlePayment = () => {
    // Guarda las consultas del usuario en el localStorage
    localStorage.setItem('consultasUsuario', JSON.stringify(cartItems));

    // Agrega las consultas del usuario a una lista global de consultas
    const todasLasConsultas = JSON.parse(localStorage.getItem('todasLasConsultas')) || [];
    const nuevasConsultas = [...todasLasConsultas, ...cartItems];
    localStorage.setItem('todasLasConsultas', JSON.stringify(nuevasConsultas));
  };

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
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={handlePayment} className="btn btn-primary">Realizar Pago</button>
      )}
    </div>
  );
};

export default Carrito;