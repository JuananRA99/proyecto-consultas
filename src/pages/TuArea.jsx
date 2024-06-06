import { Link } from "react-router-dom";

function TuArea({ auth, setAuth }) {
  return (
    <div className="container mt-5">
      <h1>Tu Área</h1>
      {!auth ? (
        <>
          <Link to="/registrarse" className="btn btn-primary mr-2">
            Registrarse
          </Link>
          <Link to="/acceder" className="btn btn-secondary">
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

export default TuArea;