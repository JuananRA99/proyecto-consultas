import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Inicio from './pages/Inicio';
import TuArea from './pages/TuArea';
import Consultas from './pages/Consultas';
import Registrarse from './pages/Registrarse';
import Acceder from './pages/Acceder';
import AreaPersonal from './pages/AreaPersonal';
import NuevoPassword from './pages/NuevoPassword';
import PanelAdmin from './pages/PanelAdmin';
import Carrito from './pages/Carrito';
import PasarelaPago from './pages/PasarelaPago';

function App() {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/tu-area');
  const handleLogout = () => {
    setAuth(false);
    setIsAdmin(false);
    setIsCartOpen(false); // Cerrar el menú desplegable del carrito
    setCartItems([]); // Vaciar el carrito
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (

      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">Más Consultas</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            </ul>
            <div className="nav-item">
              <button className="nav-link btn btn-link" onClick={toggleCart}>
                <i className="fas fa-shopping-cart"></i> Carrito ({cartItems.length})
              </button>
              {isCartOpen && (
                <div className="cart-dropdown">
                  <Carrito cartItems={cartItems} removeFromCart={removeFromCart} />
                </div>
              )}
            </div>
            {auth && (
              <div className="nav-login">
                {isAdmin ? (
                  <Link className="btn btn-success mr-2" to="/paneladmin">Panel Admin</Link>
                ) : (
                  <Link className="btn btn-success mr-2" to="/area-personal">Área Personal</Link>
                )}
                <Link className="btn btn-danger" to="/" onClick={handleLogout}>Salir</Link>
              </div>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tu-area" element={<TuArea auth={auth} />} />
          <Route path="/consultas" element={<Consultas addToCart={addToCart} />} />
          <Route path="/registrarse" element={<Registrarse setAuth={setAuth} setIsAdmin={setIsAdmin} redirectPath={redirectPath} setRedirectPath={setRedirectPath} />} />
          <Route path="/acceder" element={<Acceder setAuth={setAuth} setIsAdmin={setIsAdmin} redirectPath={redirectPath} setRedirectPath={setRedirectPath} />} />
          <Route path="/paneladmin" element={<PanelAdmin isAdmin={isAdmin} />} />
          <Route path="/area-personal" element={<AreaPersonal />} />
          <Route path="/nuevo-password" element={<NuevoPassword />} />
          <Route path="/pasarela-pago" element={<PasarelaPago cartItems={cartItems} isAuthenticated={auth} setRedirectPath={setRedirectPath} />} />
        </Routes>
      </div>

  );
}

export default App;