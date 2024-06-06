import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = ({ cartItems, removeFromCart }) => {
  const handlePayment = () => {
    // Aquí podrías realizar cualquier lógica adicional antes de redirigir a la pasarela de pago
    localStorage.setItem('consultasUsuario',JSON.stringify(cartItems));
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
          <button onClick={handlePayment} className="btn btn-primary">Realizar Pago</button>
        </ul>
      )}
    </div>
  );
};

export default Carrito;