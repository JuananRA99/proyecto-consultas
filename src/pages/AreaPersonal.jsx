import { useState, useEffect } from 'react';
import BotonGoogleCalendar from "../components/BotonGoogleCalendar";
import { FaCalendarAlt } from "react-icons/fa";
import { RiFolderHistoryFill } from "react-icons/ri";
import "./css/Calendario.css";
import './css/Consultas.css';

function AreaPersonal() {
  const [consultas, setConsultas] = useState([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const now = new Date().toISOString();

  useEffect(() => {
    // Obtén las consultas del usuario desde el localStorage al cargar el componente
    const consultasUsuario = JSON.parse(localStorage.getItem('consultasUsuario')) || [];
    setConsultas(consultasUsuario);

    // Función de limpieza para limpiar las consultas al desmontar el componente
    return () => {
      localStorage.removeItem('consultasUsuario');
    };
  }, []);

  const toggleMostrarHistorial = () => {
    setMostrarHistorial(!mostrarHistorial);
  };

  return (
    <div className="container mt-5">
      <h2>Área Personal</h2>
      <div className="card-deck">
      <div className="card">
          <div className="card-body">
            <FaCalendarAlt className="calendar-icon" />
            <BotonGoogleCalendar />
          </div>
      </div>
      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>{consulta.type}: {consulta.price}€</li>
        ))}
      </ul>
      <div className="card">
        <div className='card-body'>
        <RiFolderHistoryFill className="calendar-icon"  />
        <button className='btn btn-secondary' onClick={toggleMostrarHistorial}>
          Historial de consultas
        </button>
        </div>
        {mostrarHistorial && (
          <ul>
            {consultas.filter(consulta => consulta.date < now).map((consulta, index) => (
              <li key={index}>
                {consulta.type}: {consulta.price}€ - {consulta.date}
              </li>
            ))}
            {consultas.filter(consulta => consulta.date < now).length === 0 && (
              <li>Historial vacío</li>
            )}
          </ul>
        )}
        </div>
      </div>
    </div>
  );
}

export default AreaPersonal;
