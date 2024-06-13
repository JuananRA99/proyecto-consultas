
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './css/TuArea.css';

function TuArea({ auth}) {
  return (
    <div className='tuArea'>
    <div className="container mt-3">
      
      <h2 className='sitio'>Tu Área</h2>
      {!auth ? (
        <>
          <Link to="/registrarse" className="btn btn-primary acceso">
            Registrarse
          </Link>
          <Link to="/acceder" className="btn btn-secondary acceso">
            Acceder
          </Link>
        </>
      ) : (
        <Link to="/area-personal" className="btn btn-success">
          Accede a tu Área Personal
        </Link>
      )}
    </div>
    </div>
  );
}

TuArea.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default TuArea;