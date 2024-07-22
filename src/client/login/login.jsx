import "./login.css";
import { Link } from "react-router-dom";
import gg_logo from "../../assets/img/google-logo-v2.svg";
import fb_logo from "../../assets/img/facebook-logo.svg";

const Login = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="login-container container">
        <div className="body-login">
          <div className="form-login">
            <form action="" method="">
              <div className="form-title">
                <h1>ĐĂNG NHẬP</h1>
                <p>
                  Đăng nhập để sử dụng Plan for Trips và đặt xe và nơi ở tốt
                  nhất
                </p>
              </div>
              <div className="form-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập user id"
                />{" "}
                <br />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập password"
                />{" "}
                <br />
                <div className="remember-fogot">
                  <div>
                    <input type="checkbox" className="me-2" />
                    <label>Ghi nhớ mật khẩu</label>
                  </div>
                  <Link to="">Quên mật khẩu ?</Link>
                </div>
              </div>
              <div className="form-footer">
                <button type="submit">Đăng nhập</button> <br />
                <Link to="/register">
                  Chưa có tài khoản?<span>Đăng ký ngay</span>
                </Link>
              </div>
              <div className="social-login">
                <h5>Hoặc đăng nhập bằng</h5>
                <div className="button-login-social-network">
                  <Link to="#" className="btn btn-google">
                    <img src={gg_logo} alt="" />
                    Google
                  </Link>
                  <Link to="#" className="btn btn-facebook">
                    <img src={fb_logo} alt="" />
                    Facebook
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="image-login">
            <img
              src="https://vcdn1-dulich.vnecdn.net/2019/10/04/tha-c-ba-n-gio-c-vnexpress-5-1570193128.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GGIbzHt8g5SVeH8FwEMohA"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
