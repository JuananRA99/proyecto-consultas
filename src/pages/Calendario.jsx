import { useState } from 'react';
import api from '../services/api';

const Calendario = () => {
  const [event, setEvent] = useState({
    summary: '',
    description: '',
    start: '',
    end: '',
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createEvent(event);
      alert('Evento creado');
    } catch (error) {
      console.error(error);
      alert('Error al crear el evento');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="summary"
        type="text"
        value={event.summary}
        onChange={handleChange}
        placeholder="Título del evento"
        required
      />
      <input
        name="description"
        type="text"
        value={event.description}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        name="start"
        type="datetime-local"
        value={event.start}
        onChange={handleChange}
        required
      />
      <input
        name="end"
        type="datetime-local"
        value={event.end}
        onChange={handleChange}
        required
      />
      <button type="submit">Crear Evento</button>
    </form>
  );
};

export default Calendario;
