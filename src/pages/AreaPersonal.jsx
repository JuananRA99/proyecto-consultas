import React, { useState } from 'react';

function AreaPersonal() {
  const [consultas, setConsultas] = useState([]);

  const obtenerConsultasUsuario = () => {
    // Lógica para obtener las consultas del usuario desde el localStorage
    const consultasUsuario = JSON.parse(localStorage.getItem('consultasUsuario')) || [];
    setConsultas(consultasUsuario);
  };

  return (
    <div>
      <h2>Área Personal</h2>
      <button onClick={obtenerConsultasUsuario}>Obtener Mis Consultas</button>
      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>{consulta}</li>
        ))}
      </ul>
    </div>
  );
}

export default AreaPersonal;