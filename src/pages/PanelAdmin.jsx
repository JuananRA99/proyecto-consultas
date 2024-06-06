import React, { useState, useEffect } from 'react';

function PanelAdmin({ isAdmin }) {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    if (isAdmin) {
      // Lógica para cargar todas las consultas almacenadas
      const todasLasConsultas = JSON.parse(localStorage.getItem('consultas')) || [];
      setConsultas(todasLasConsultas);
    }
  }, [isAdmin]);

  return (
    <div>
      {isAdmin && (
        <div>
          <h2>Panel de Administración</h2>
          <ul>
            {consultas.map((consulta, index) => (
              <li key={index}>{consulta}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PanelAdmin;