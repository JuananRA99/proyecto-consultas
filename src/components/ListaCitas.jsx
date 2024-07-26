import { useEffect, useState } from 'react';
import { getUserAppointments } from '../services/api';

const ListaCitas = ({ userId }) => {
  const [citas, setcitas] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await getUserAppointments(userId);
      setcitas(response.data.citas);
    };

    fetchAppointments();
  }, [userId]);

  return (
    <div>
      <h2>Consultas reservadas</h2>
      <ul>
        {appointments.map(appt => (
          <li key={appt._id}>{appt.date}: {appt.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCitas;
