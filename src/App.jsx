import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import Inicio from './pages/Inicio';
import TuArea from './pages/TuArea';
import Consultas from './pages/Consultas';
import Registrarse from './pages/Registrarse';
import Acceder from './pages/Acceder';
import AreaPersonal from './pages/AreaPersonal';
import NuevoPassword from './pages/NuevoPassword';
import PanelAdmin from './pages/PanelAdmin';

import PasarelaPago from './pages/PasarelaPago';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/tu-area');

  const handleLogout = () => {
    setAuth(false);
    setIsAdmin(false);
    setIsCartOpen(false);
    setCartItems([]);
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

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <body>
      <div className="container mt-5">
        <NavBar
          auth={auth}
          isAdmin={isAdmin}
          cartItems={cartItems}
          toggleCart={toggleCart}
          isCartOpen={isCartOpen}
          handleLogout={handleLogout}
          removeFromCart={removeFromCart}
          handleCloseCart={handleCloseCart}
        />
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
    <Footer />

    </body>
  );
}

export default App;