import { Link } from "react-router-dom";

function Header({enterpriseName}) {

  console.log(enterpriseName);

    return ( 
        <>
             {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <a className="navbar-brand" href="index.html">
          <span className="fw-bolder text-primary">{enterpriseName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <Link className="nav-link" to="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'resources'}>
                Tài nguyên
              </Link>
            </li>
            <li className="nav-item">   
              <Link className="nav-link" to={'post'}>
                Bài đăng
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="statistical">
                Thống kê
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Header*/}
        </>
     );
}

export default Header;