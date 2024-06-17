import{ useState, useEffect } from 'react';

function AreaPersonal() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    // Obtén las consultas del usuario desde el localStorage al cargar el componente
    const consultasUsuario = JSON.parse(localStorage.getItem('consultasUsuario')) || [];
    setConsultas(consultasUsuario);

    // Función de limpieza para limpiar las consultas al desmontar el componente
    return () => {
      localStorage.removeItem('consultasUsuario');
    };
  }, []);

  return (
    <div className=''>
      <h2>Área Personal</h2>
      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>{consulta.type}: {consulta.price}€</li>
        ))}
      </ul>
        <button className='btn btn-secondary '>
            Historial de consultas
        </button>
    </div>
  );
}

export default AreaPersonal;