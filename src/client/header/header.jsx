// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/planfortrips-logo.png";

function Header() {
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  // Handle link click to hide the menu
  const handleLinkClick = () => {
    setClicked(false);
  };

  // Hide menu when route changes
  useEffect(() => {
    setClicked(false);
  }, [location]);

  return (
    <>
      <nav className={`NavbarItems ${clicked ? "active" : ""}`}>
        <h1 className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" width="250px" className="mt-2" />
          </Link>
        </h1>

        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          <li>
            <Link
              to="/transport"
              className="nav-links"
              onClick={handleLinkClick}
            >
              <i className="fa-solid fa-plane"></i>
              Phương tiện
            </Link>
          </li>
          <li>
            <Link to="/hotel" className="nav-links" onClick={handleLinkClick}>
              <i className="fa-solid fa-hotel"></i>
              Khách sạn
            </Link>
          </li>
          <li>
            <Link to="/food" className="nav-links" onClick={handleLinkClick}>
              <i className="fa-solid fa-utensils"></i>
              Hàng quán
            </Link>
          </li>
          <li>
            <Link
              to="/check-in"
              className="nav-links"
              onClick={handleLinkClick}
            >
              <i className="fa-solid fa-location-dot"></i>
              Check-in
            </Link>
          </li>
          <li>
            <Link to="" className="nav-links" onClick={handleLinkClick}>
              <i className="fa-solid fa-handshake"></i>
              Hợp tác
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={handleLinkClick}
            >
              Đăng nhập
            </Link>
          </li>
          <Link to="/login" onClick={handleLinkClick}>
            <button>Đăng nhập</button>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
