// Inicio.jsx


import './css/Inicio.css';
import { Link} from 'react-router-dom';

function Inicio() {
  return (
    <body>
        
   <div className="inicio">
    <div className="container mt-5">
        <header>
      <h1 className="mb-4">Bienvenido a Más Consultas</h1>
      </header>
      <h3>En <strong>Más Consultas </strong> nos preocupamos </h3> 
      <br />
      <h3>  por resolver tus problemas tecnológicos</h3>
      <br />
    <h3>y ofrecerte soluciones eficaces</h3>
    <br />
  
    <Link to="/registrarse" className="btn btn-primary mr-2 mt-3">
            Regístrate ya
    </Link>
<br />

  <h3 className='mt-3' > Para solventarlos</h3>

    </div>
    </div>
     </body>
   
  );
}

export default Inicio;
