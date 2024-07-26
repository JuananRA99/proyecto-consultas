import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getConsultas } from '../services/api'; // Importa la función para obtener las consultas

function PanelAdmin({ isAdmin }) {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAdmin) {
      const fetchConsultas = async () => {
        try {
          const consultasData = await getConsultas();
          setConsultas(consultasData);
        } catch (error) {
          setError('Error al cargar las consultas');
        } finally {
          setLoading(false);
        }
      };

      fetchConsultas();
    }
  }, [isAdmin]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {isAdmin && consultas.length > 0 && (
        <div>
          <h2>Panel de Administración</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <ul>
            {consultas.map((consulta) => (
              <li key={consulta._id}>
                <strong>ID de la Consulta:</strong> {consulta._id}<br />
                <strong>ID del Usuario:</strong> {consulta.user ? consulta.user._id : 'Desconocido'}<br />
                <strong>Fecha de Compra:</strong> {new Date(consulta.date).toLocaleDateString()}<br />
                <strong>Tipo:</strong> {consulta.type}<br />
                <strong>Precio:</strong> {consulta.price}€
              </li>
            ))}
          </ul>
        </div>
      )}
       <div>
          <h2>Panel de Administración</h2>
      {isAdmin && consultas.length === 0 && <p>No hay consultas para mostrar.</p>}
      </div>
    </div>
  );
}

PanelAdmin.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default PanelAdmin;
