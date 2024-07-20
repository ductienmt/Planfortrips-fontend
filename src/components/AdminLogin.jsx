import React from 'react';
import '../components/styles/AdminLogin.css'

const AdminLogin = () => {
    return (
        <div className='login-body'>
            <div className="overplay">
                <div className="login-content">
                    <div className='header'>
                        <h2>Plan For TRips</h2>
                        <p>Chào mừng quay trở lại!
                        </p>
                    </div>
                    <div className='login-area'>
                        <input type="text" placeholder='Tài Khoản' className='username' />
                        <input type="password" placeholder='Mật Khẩu' className='password' />
                        <button className='button-login'> Đăng Nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default AdminLogin;