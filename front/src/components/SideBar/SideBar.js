const SideBar = () => {
  return (
    <div
    className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
    style={{ width: "280px",  minHeight: "100vh" }}
  >
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <i className="bi bi-bootstrap pe-none me-2" style={{ width: "40px", height: "32px" }}></i>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <i className="bi bi-house pe-none me-2"></i>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-speedometer2 pe-none me-2"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-table pe-none me-2"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-grid pe-none me-2"></i>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-person-circle pe-none me-2"></i>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default SideBar;
