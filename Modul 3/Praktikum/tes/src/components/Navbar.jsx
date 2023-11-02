import logo from "../Assets/logo-ilab.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            style={{ marginLeft: "25px", height: "42px" }}
            alt="logo-ilab"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Navbar Menu */}
          <div className="navbar-nav w-100 d-flex justify-content-center">
            <Link to="/" className="nav-link active">
              HOME
            </Link>
            <Link to="/about" className="nav-link active">
              ABOUT US
            </Link>
            <Link to="/contact" className="nav-link active">
              CONTACT
            </Link>
          </div>

          {/* Log Activity button */}
          <div className="d-grid gap-2 d-flex justify-content-end">
            <button className="btn btn-light signup" type="button">
              SIGN UP
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "100px" }}
              type="button"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
