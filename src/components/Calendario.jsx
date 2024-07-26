import { useState } from 'react';
import Modal from 'react-modal';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import '../pages/css/CalendarModal.css';



moment.locale('es');

const localizer = momentLocalizer(moment);


const CalendarModal = ({ isOpen, onRequestClose, onSave }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  const events = [
    // Aquí puedes agregar eventos predeterminados si es necesario
  ];

  const handleSelectSlot = ({ start, end }) => {
    const startHour = moment(start).hour();
    if (startHour >= 9 && startHour < 17) {
      setSelectedEvent({
        start,
        end: moment(start).add(1, 'hour').toDate(), 
      });
    }
  };

  const handleSave = () => {
    if (selectedEvent) {
      onSave(selectedEvent);
      onRequestClose();
    }
  };
  return (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} onSave={handleSave} className="calendar-modal">
    <div className="modal-content">
        <div className="modal-left">
          <div className="modal-header">
            <button className="close" onClick={onRequestClose}>
              Cerrar
            </button>
          </div>
          <div className="calendar-container">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable
              views={['week', 'day']}
              defaultView="week"
              onSelectSlot={handleSelectSlot}
              min={new Date(2021, 1, 1, 9, 0)} // Hora mínima 9:00
              max={new Date(2021, 1, 1, 17, 0)} // Hora máxima 17:00
              style={{ height: '400px', width: '100%' }} // Tamaño ajustado
            />
          </div>
        </div>
        <div className="modal-right">
          <h3>Selecciona una hora</h3>
          {selectedEvent && (
            <div>
              <p>Fecha: {moment(selectedEvent.start).format('LL')}</p>
              <p>Hora de inicio: {moment(selectedEvent.start).format('LT')}</p>
              <p>Hora de fin: {moment(selectedEvent.end).format('LT')}</p>
            </div>
          )}
          <button className="boton" onClick={handleSave} disabled={!selectedEvent}>
            Reservar
          </button>
        </div>
      </div>
  </Modal>
  );
};

export default CalendarModal;


