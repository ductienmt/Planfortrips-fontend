import { useState } from "react";
import "./EtpLogin.css"; 
import { useNavigate } from "react-router-dom";
import logoBrand from '../../assets/images/planfortrips-logo.png';


function EtpLogin() {
    const [typeEtp, setTypeEtp] = useState(''); 
    const navi = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        sessionStorage.setItem('typeEtp', typeEtp);
        navi('/enterprise')
    }

    const typeEtps = [
        { typeID: 'tp001', typeName: 'vehicle' },
        { typeID: 'tp002', typeName: 'restaurant' },
        { typeID: 'tp003', typeName: 'hotel' },
    ];

    return ( 
        <>
            <div className="login-container">
                <h2 className="text-center text-dark mt-5">Tài khoản doanh nghiệp</h2>
                <div className="card my-5">
                    <form className="card-body p-lg-5" onSubmit={handleLogin}>
                      <div className="text-center mb-4">
                            <img
                                src={logoBrand}
                                className="profile-image img-thumbnail rounded-circle mx-auto"
                                alt="profile"
                                style={{objectFit : 'contain'}}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="Username"
                                aria-describedby="emailHelp"
                                placeholder="User Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Chọn loại doanh nghiệp</label>
                            <select
                                className="form-select"
                                value={typeEtp}
                                onChange={(e) => setTypeEtp(e.target.value)}
                            >
                                <option value="">-- Chọn loại --</option>
                                {typeEtps.map((type) => (
                                    <option key={type.typeID} value={type.typeName}>
                                        {type.typeName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-lg px-5">
                                Đăng nhập
                            </button>
                        </div>
                        <div id="emailHelp" className="form-text text-center mt-3">
                            Chưa có tài khoản?{" "}
                            <a href="#" className="text-primary fw-bold">
                                Tham gia với chúng tôi
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EtpLogin;
