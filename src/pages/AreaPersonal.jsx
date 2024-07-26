import { useState, useEffect } from 'react';
import BotonGoogleCalendar from "../components/BotonGoogleCalendar";
import { FaCalendarAlt } from "react-icons/fa";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import CalendarModal from '../components/Calendario'; 
import "./css/Calendario.css";
import './css/Consultas.css';
import { createAppointment, getUserAppointments } from '../services/api'; 

function AreaPersonal() {
  const [consultas, setConsultas] = useState([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState('user_id'); 
  const now = new Date().toISOString();

  useEffect(() => {
    
    const fetchAppointments = async () => {
      const response = await getUserAppointments(userId);
      setConsultas(response.data.appointments);
    };

    fetchAppointments();
  }, [userId]);

  const toggleMostrarHistorial = () => {
    setMostrarHistorial(!mostrarHistorial);
  };

  const handleSaveAppointment = async (date) => {
    const response = await createAppointment(userId, date);
    setConsultas([...consultas, response.data]);
  };

  return (
    <div className="container mt-5">
      <h2>Área Personal</h2>
      <button onClick={() => setModalIsOpen(true)}>Reservar Cita</button>
      <CalendarModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onSave={handleSaveAppointment}
      />
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <FaStore className="calendar-icon" />
            <ul>
              {consultas.map((consulta, index) => (
                <li key={index}>{new Date(consulta.date).toLocaleString()}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <FaCalendarAlt className="calendar-icon" />
            <BotonGoogleCalendar />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <RiFolderHistoryFill className="calendar-icon" />
            <button className='btn btn-secondary' onClick={toggleMostrarHistorial}>
              Historial de consultas
            </button>
            {mostrarHistorial && (
              <ul>
                {consultas.filter(consulta => consulta.date < now).map((consulta, index) => (
                  <li key={index}>
                    {new Date(consulta.date).toLocaleString()}
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
    </div>
  );
}

export default AreaPersonal;
