import "./login.css";
import logo from "../../assets/img/planfortrips-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="body-login">
          <div className="form-login">
            <img src={logo} alt="" />
            <form action="" method="">
              <div className="form-title">
                <h1>Đăng nhập</h1>
                <p>
                  Đăng nhập để sử dụng Plan for Trips và đặt xe và nơi ở tốt
                  nhất
                </p>
              </div>
              <div className="form-body">
                <input type="text" placeholder="Nhập user id" /> <br />
                <input type="password" placeholder="Nhập password" /> <br />
                <div className="remember-fogot">
                  <div>
                    <input type="checkbox" />
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
          <div className="image-login"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
