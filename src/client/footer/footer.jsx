// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import logo from "../../assets/img/planfortrips-logo.png";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-muted">
        <hr />
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>{" "}
                <span className="nameCompany">Plan for Trips</span>
              </h6> */}
              <img src={logo} alt="" className="logoCompany" />
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm này</h6>
              <p>
                <a href="#!" className="text-reset">
                  React JS (FE)
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Spring Boot (BE)
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Bootstrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SQL Server
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Có thể bạn cần</h6>
              <p>
                <a href="#!" className="text-reset">
                  Liên hệ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Báo cáo
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Về chúng tôi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hỗ trợ
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
              <p>
                <i className="fas fa-home me-3"></i>FPT Polytechnic
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                planfortrips.296@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 84 123 456 789
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 84 123 456 789
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-4 custom-copyright">
          © 2024 Copyright:{" "}
          <a className="text-reset fw-bold" href="#">
            Planfortrips
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
