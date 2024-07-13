import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
                <Link to="/register">Chưa có tài khoản? Đăng ký ngay</Link>
              </div>
              <div className="social-login">
                <h5>Hoặc đăng nhập bằng</h5>
                <div className="button-login-social-network">
                  <Link>
                    <i className="fa-brands fa-google"></i>
                    Google
                  </Link>
                  <Link>
                    <i className="fa-brands fa-facebook-f"></i>
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
              width="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
