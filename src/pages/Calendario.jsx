import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import PropTypes from 'prop-types';
import { FaCalendarAlt } from "react-icons/fa";

const ReservarCita = ({ accessToken }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('11:00');

  const handleReservarCita = async () => {
    try {
      const startDateTime = new Date(startDate);
      startDateTime.setHours(startTime.split(':')[0]);
      startDateTime.setMinutes(startTime.split(':')[1]);

      const endDateTime = new Date(startDate);
      endDateTime.setHours(endTime.split(':')[0]);
      endDateTime.setMinutes(endTime.split(':')[1]);

      const response = await axios.post(
        '/api/reservar-cita',
        {
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          accessToken,
        }
      );
      console.log(response.data);
      // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error('Error al reservar la cita:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <FaCalendarAlt />
      <div>
        <label>Fecha:</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div>
        <label>Hora de inicio:</label>
        <TimePicker value={startTime} onChange={setStartTime} />
      </div>
      <div>
        <label>Hora de fin:</label>
        <TimePicker value={endTime} onChange={setEndTime} />
      </div>
      <button onClick={handleReservarCita}>Reservar Cita</button>
    </div>
  );
};

ReservarCita.propTypes = {
  accessToken: PropTypes.func.isRequired,
};

export default ReservarCita;