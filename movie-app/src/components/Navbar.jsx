function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item px-2 rounded bg-dark mx-2">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;