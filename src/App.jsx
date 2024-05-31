import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Inicio from './pages/Inicio';
import TuArea from './pages/TuArea';
import Consultas from './pages/Consultas';
import Telefonica from './pages/Telefonica';
import Presencial from './pages/Presencial';
import Videollamada from './pages/Videollamada';
import Registrarse from './pages/Registrarse';
import Acceder from './pages/Acceder';
import AreaPersonal from './pages/AreaPersonal';
import NuevoPassword from './pages/NuevoPassword';
import PanelAdmin from './pages/PanelAdmin';
import ConsultaTelefonica from './pages/ConsultaTelefonica';
import ConsultaVideollamada from './pages/ConsultaVideollamada.jsx';
import ConsultaPresencial from './pages/ConsultaPresencial';

function App() {
  const [auth, setAuth] = useState(false);

  const handleLogout = () => {
    setAuth(false);
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
          {auth && (
            <div className="nav-login">
              <Link className="btn btn-success mr-2" to="/area-personal">Área Personal</Link>
              <button className="btn btn-danger" onClick={handleLogout}>Salir</button>
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/tu-area' element={<TuArea auth={auth} setAuth={setAuth} />} />
        <Route path='/consultas' element={<Consultas />} />
        <Route path='/telefonica' element={<Telefonica />} />
        <Route path='/presencial' element={<Presencial />} />
        <Route path='/videollamada' element={<Videollamada />} />
        <Route path='/consulta-telefonica' element={<ConsultaTelefonica />} />
        <Route path='/consulta-presencial' element={<ConsultaPresencial />} />
        <Route path='/consulta-videollamada' element={<ConsultaVideollamada />} />
        <Route path='/registrarse' element={<Registrarse setAuth={setAuth} />} />
        <Route path='/acceder' element={<Acceder setAuth={setAuth} />} />
        <Route path='/paneladmin' element={<PanelAdmin />} />
        <Route path='/area-personal' element={<AreaPersonal auth={auth} />} />
        <Route path='/nuevo-password' element={<NuevoPassword />} />
      </Routes>
    </div>
  );
}

export default App;
