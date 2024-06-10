import { useState, useEffect } from 'react';
import axios from 'axios';

function TuArea({ auth, setAuth }) {
  const [consulta, setConsulta] = useState({
    usuario_id: '',
    fecha: '',
    hora: '',
    descripcion: '',
    email: '',
  });

  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/create-consulta', consulta);
      console.log('Consulta creada:', response.data);
    } catch (error) {
      console.error('Error creando la consulta:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Tu Área</h1>
      {!auth ? (
        <>
          <Link to="../pages/Registrarse.jsx" className="btn btn-primary mr-2">
            Registrarse
          </Link>
          <Link to="../pages/Acceder.jsx" className="btn btn-secondary">
            Acceder
          </Link>
        </>
      ) : (
        <>
          <Link to="../pages/AreaPersonal.jsx" className="btn btn-success">
            Accede a tu Área Personal
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="usuario_id"
              placeholder="ID de Usuario"
              value={consulta.usuario_id}
              onChange={handleChange}
            />
            <input
              type="date"
              name="fecha"
              placeholder="Fecha"
              value={consulta.fecha}
              onChange={handleChange}
            />
            <input
              type="time"
              name="hora"
              placeholder="Hora"
              value={consulta.hora}
              onChange={handleChange}
            />
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción"
              value={consulta.descripcion}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={consulta.email}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Crear Consulta
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default TuArea;
