import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function TuArea({ auth}) {
  return (
    <div className=" container mt-5">
      <h1>Tu Área</h1>
      {!auth ? (
        <>
          <Link to="/registrarse" className="btn btn-primary mx-2">
            Registrarse
          </Link>
          <Link to="/acceder" className="btn btn-secondary mx-2">
            Acceder
          </Link>
        </>
      ) : (
        <Link to="/area-personal" className="btn btn-success">
          Accede a tu Área Personal
        </Link>
      )}
    </div>
  );
}

TuArea.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default TuArea;
