import React from 'react'
import { Link } from 'react-router-dom'
function Consultas() {
  return (
    <div className="container mt-5">
    <h1>Consultas</h1>
    <div className="list-group">
      <Link to="/telefonica" className="list-group-item list-group-item-action">
        Consulta Telefónica
      </Link>
      <Link to="/presencial" className="list-group-item list-group-item-action">
        Consulta Presencial
      </Link>
      <Link to="/videollamada" className="list-group-item list-group-item-action">
        Consulta por Videollamada
      </Link>
    </div>
  </div>
  )
}

export default Consultas