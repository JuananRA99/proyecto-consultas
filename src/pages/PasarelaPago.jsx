import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('tu_api_key_de_stripe');

const PasarelaPago = ({ cartItems, isAuthenticated, setRedirectPath }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  const handlePayment = async () => {
    if (!isAuthenticated) {
      alert('Para hacer el pago, primero debes iniciar sesión o registrarte.');
      setRedirectPath('/pasarela-pago');
      return;
    }

    if (selectedMethod === 'Stripe') {
      const stripe = await stripePromise;
      // Lógica para manejar el pago con Stripe
      // Ejemplo: stripe.redirectToCheckout({ sessionId: sessionId });
      alert('Redireccionar a la página de pago de Stripe...');
    } else if (selectedMethod === 'PayPal') {
      // Lógica para manejar el pago con PayPal
      alert('Redireccionar a la página de pago de PayPal...');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Pasarela de Pago</h1>
      <p>Productos en el carrito:</p>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.type}: {item.price}€</li>
        ))}
      </ul>
      {isAuthenticated ? (
        <div>
          <h3>Selecciona un método de pago:</h3>
          <div>
            <button className="btn btn-primary mr-2" onClick={() => handleSelectMethod('Stripe')}>Stripe</button>
            <button className="btn btn-primary" onClick={() => handleSelectMethod('PayPal')}>PayPal</button>
          </div>
          {selectedMethod === 'PayPal' && (
            <PayPalScriptProvider options={{ "client-id": "AVMw2wMrB26RrMBGFpIiHUqA1lB8BwvcUFQlX920I7rXyuJU9ndzXorXwKtYfpNR3tkm0HfNhqC-A5hA" }}>
              <PayPalButtons createOrder={(data, actions) => { /* Lógica para crear la orden */ }} />
            </PayPalScriptProvider>
          )}
        </div>
      ) : (
        <div>
          <p>Para hacer el pago, primero debes iniciar sesión o registrarte.</p>
          <Link to="/acceder" className="btn btn-primary mr-2" onClick={() => setRedirectPath('/pasarela-pago')}>Acceder</Link>
          <Link to="/registrarse" className="btn btn-primary">Registrarse</Link>
        </div>
      )}
      <button className="btn btn-success mt-3" onClick={handlePayment}>Pagar con {selectedMethod}</button>
    </div>
  );
};

export default PasarelaPago;