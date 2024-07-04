// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className={`NavbarItems ${clicked ? "active" : ""}`}>
        <h1 className="nav-logo">
          <Link to="/">Plan for Trips</Link>
        </h1>

        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          <li>
            <Link to="/transport" className="nav-links">
              <i className="fa-solid fa-plane"></i>
              Phương tiện
            </Link>
          </li>
          <li>
            <Link to="/hotel" className="nav-links">
              <i className="fa-solid fa-hotel"></i>
              Khách sạn
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-utensils"></i>
              Hàng quán
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-location-dot"></i>
              Check-in
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links">
              <i className="fa-solid fa-handshake"></i>
              Hợp tác
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links-mobile">
              Đăng nhập
            </Link>
          </li>
          <button>Đăng nhập</button>
        </ul>
      </nav>
    </>
  );
}

export default Header;
