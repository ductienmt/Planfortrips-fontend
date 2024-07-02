// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className="NavbarItems d-flex justify-content-between align-items-center">
        <Link to="/">
          <h1 className="navbar-logo">Plan for Trips</h1>
        </Link>

        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className="nav-menu">
          {/* <li>
            <Link to="" className="nav-links">
              <i className="fa-brands fa-lastfm"></i>
              Plan
            </Link>
          </li> */}
          <li>
            <Link to="/transport" className="nav-links">
              <i className="fa-solid fa-plane"></i>
              Phương tiện
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-hotel"></i>
              Khách sạn
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-house"></i>
              Hàng quán
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-house"></i>
              Check-in
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-handshake"></i>
              Hợp tác
            </Link>
          </li>
          <button>Đăng nhập</button>
        </ul>
      </nav>
    </>
  );
}

export default Header;
