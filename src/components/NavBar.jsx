import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import Carrito from '../pages/Carrito';
import PropTypes from 'prop-types';
import '../index.css';

const NavBar = ({ auth, isAdmin, cartItems, toggleCart, isCartOpen, handleLogout, removeFromCart, handleCloseCart }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">Más Consultas</Link>
      {/* Botón del menú de hamburguesa */}
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tu-area">Tu área</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/consultas">Consultas</Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={toggleCart}>
              <GrCart size={28} /> ({cartItems.length})
            </button>
            {isCartOpen && (
              <div className="cart-dropdown">
                <Carrito cartItems={cartItems} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} />
              </div>
            )}
          </li>
        </ul>
        
        {auth && (
          <div className="nav-login d-flex">
            {isAdmin ? (
              <Link className="btn btn-success mr-2" to="/paneladmin">Panel Admin</Link>
            ) : (
              <Link className="btn btn-success mr-2" to="/area-personal">Área Personal</Link>
            )}
            <Link className="btn btn-danger salir" to="/" onClick={handleLogout}>Salir</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  toggleCart: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
};

export default NavBar;