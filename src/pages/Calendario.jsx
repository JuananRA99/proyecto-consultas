import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import PropTypes from 'prop-types';
import { FaCalendarAlt } from "react-icons/fa";
import "./css/Calendario.css";

const ReservarCita = ({ accessToken }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
 

  const handleReservarCita = async () => {
    try {
      const startDateTime = new Date(startDate);
      startDateTime.setHours(startTime.split(':')[0]);
      startDateTime.setMinutes(startTime.split(':')[1]);

      const endDateTime = new Date(startDate);
      endDateTime.setHours(endTime.split(':')[0]);
      endDateTime.setMinutes(endTime.split(':')[1]);

      const response = await axios.post(
        '/api/calendar',
        {
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          accessToken,
        }
      );
      console.log(response.data);
      
    } catch (error) {
      console.error('Error al reservar la cita:', error);
   
    }
  };

  return (
    <div className="reservar-cita-container">
      <div className="icon-container">
        <FaCalendarAlt className="calendar-icon" />
      </div>
      <div className="form-group">
        <label>Fecha:</label>
        <DatePicker
          id="fecha"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label >Hora de inicio:</label>
        <TimePicker
          id="horaInicio"
          value={startTime}
          onChange={setStartTime}
          className="form-control hr"
        />
      </div>
      <div className="form-group">
        <label >Hora de fin:</label>
        <TimePicker
          id="horaFin"
          value={endTime}
          onChange={setEndTime}
          className="form-control hr"
        />
      </div>
      <div className="form-group">
        <button onClick={handleReservarCita} className="btn btn-primary btn-block">Reservar Cita</button>
      </div>
    </div>
  );
};

ReservarCita.propTypes = {
  accessToken: PropTypes.func.isRequired,
};

export default ReservarCita;