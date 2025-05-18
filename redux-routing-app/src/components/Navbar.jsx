import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;