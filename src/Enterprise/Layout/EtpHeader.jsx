import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avartar from '../assets/images/pexels-photo-1162361-removebg-preview.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Adjusted icon import
import { Link, useNavigate } from 'react-router-dom';

function EtpHeader({ children }) {



  const navi = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem('typeEtp');
    navi('')
  }

  const logIn = (typeEnterprise) => {
    sessionStorage.setItem('typeEtp',typeEnterprise);
  }

  return (
    <>
      {/* Main wrapper */}
      <div className="body-wrapper">
        {/* Header Start */}
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item d-block d-xl-none">
                <Link
                  className="nav-link sidebartoggler nav-icon-hover"
                  id="headerCollapse"
                  to="#" // Replaced href="#" with href="#"
                >
                  <i className="ti ti-menu-2" />
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-icon-hover" href="#"> {/* Replaced href="#" with href="#" */}
                  <i className="ti ti-bell-ringing" />
                  <div className="notification bg-primary rounded-circle" />
                </a>
              </li>
            </ul>
            <div className="search w-100 mx-5 input-group">
              <input type="text" className="form-control" placeholder="Tìm kiếm" />
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faSearch} /> {/* Adjusted icon usage */}
              </span>
            </div>
            <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link nav-icon-hover"
                    to="#" // Replaced href="#" with href="#"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={avartar}
                      alt=""
                      width={100}
                      height={35}
                      className="rounded-circle"
                    />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop2"
                  >
                    <div className="message-body">
                      <Link to="vehicle" className="d-flex align-items-center gap-2 dropdown-item"
                        onClick={() => logIn('vehicle')}
                      >
                      <i className="ti ti-car"></i>
                        <p className="mb-0 fs-3">Phương tiện</p>
                      </Link>
                      <Link to="restaurant" className="d-flex align-items-center gap-2 dropdown-item"
                        onClick={() => logIn('restaurant')}
                      >
                      <i className="ti ti-tools-kitchen-2"></i>
                        <p className="mb-0 fs-3">Quán ăn</p>
                      </Link>
                      <Link to="hotel" className="d-flex align-items-center gap-2 dropdown-item"
                        onClick={() => logIn('hotel')}
                      >
                      <i className="ti ti-window"></i>
                        <p className="mb-0 fs-3">Khách sạn</p>
                      </Link>
                      <button
                      onClick={logOut}
                        className="btn btn-outline-primary mx-3 mt-2 d-block"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
}

export default EtpHeader;
