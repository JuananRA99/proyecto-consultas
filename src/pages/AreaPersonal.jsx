import { useState, useEffect } from 'react';
import axios from 'axios';

function AreaPersonal({ auth }) {
  const [consultas, setConsultas] = useState([]);
  const [historialConsultas, setHistorialConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth) {
      // Obtiene las consultas actuales del usuario
      axios.get('/api/consultas')
        .then(response => {
          setConsultas(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las consultas:', error);
        });

      // Obtiene el historial de consultas del usuario
      axios.get('/api/historial-consultas')
        .then(response => {
          setHistorialConsultas(response.data);
        })
        .catch(error => {
          console.error('Error al obtener el historial de consultas:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [auth]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Área Personal</h1>
      <h2>Consultas Pendientes</h2>
      {consultas.length === 0 ? (
        <p>No tienes consultas pendientes.</p>
      ) : (
        <ul>
          {consultas.map((consulta, index) => (
            <li key={index}>
              {consulta.fecha} - {consulta.hora} - <a href={consulta.zoomLink}>Enlace de Zoom</a>
            </li>
          ))}
        </ul>
      )}

      <h2 className="btn btn-success">Historial de Consultas</h2>
      {historialConsultas.length === 0 ? (
        <p>No tienes historial de consultas.</p>
      ) : (
        <ul>
          {historialConsultas.map((consulta, index) => (
            <li key={index}>
              {consulta.fecha} - {consulta.hora} - {consulta.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AreaPersonal;
