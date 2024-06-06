import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const PanelAdmin = () => {
  const [slots, setSlots] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [newSlot, setNewSlot] = useState({ start: '', end: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slotsResponse = await api.getAvailableSlots();
        const consultationsResponse = await api.getAssignedConsultations();
        setSlots(slotsResponse.data);
        setConsultations(consultationsResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Acceder.jsx');
  };

  const handleCreateSlot = async (e) => {
    e.preventDefault();
    try {
      await api.createAvailableSlot(newSlot);
      setNewSlot({ start: '', end: '' });
      const slotsResponse = await api.getAvailableSlots();
      setSlots(slotsResponse.data);
    } catch (error) {
      console.error('Error creando slot', error);
    }
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <h3>Horarios Disponibles</h3>
      <ul>
        {slots.map((slot) => (
          <li key={slot._id}>{`Inicio: ${new Date(slot.start).toLocaleString()}, Fin: ${new Date(slot.end).toLocaleString()}, Disponible: ${slot.available}`}</li>
        ))}
      </ul>
      <form onSubmit={handleCreateSlot}>
        <h3>Crear Nuevo Horario</h3>
        <input
          type="datetime-local"
          value={newSlot.start}
          onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          value={newSlot.end}
          onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
          required
        />
        <button type="submit">Crear</button>
      </form>
      <h3>Consultas Asignadas</h3>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation._id}>
            {`Usuario: ${consultation.userId.name}, Inicio: ${new Date(consultation.start).toLocaleString()}, Fin: ${new Date(consultation.end).toLocaleString()}, Enlace: ${consultation.link}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PanelAdmin;
