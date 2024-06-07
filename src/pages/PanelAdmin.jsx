import React, { useState, useEffect } from 'react';

function PanelAdmin({ isAdmin }) {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    if (isAdmin) {
      // Lógica para cargar todas las consultas almacenadas
      const todasLasConsultas = JSON.parse(localStorage.getItem('todasLasConsultas')) || [];
      setConsultas(todasLasConsultas);
    }
  }, [isAdmin]);

  return (
    <div>
      {isAdmin && consultas.length > 0 && (
        <div>
          <h2>Panel de Administración</h2>
          <ul>
            {consultas.map((consulta, index) => (
              <li key={index}>{consulta.type}: {consulta.price}€</li>
            ))}
          </ul>
        </div>
      )}
      {isAdmin && consultas.length === 0 && (
        <div>
          <h2>Panel de Administración</h2>
          <p>No hay consultas disponibles.</p>
        </div>
      )}
    </div>
  );
}

export default PanelAdmin;