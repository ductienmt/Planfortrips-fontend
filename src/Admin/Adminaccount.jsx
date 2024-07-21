import React from 'react';
import './styles/Adminaccount.css';
import Sidebar from './Sidebar';

const AccountGeneral = () => {
    return (
        <div className='admin-account'>
            <Sidebar />
            <div className="account-content">
                <div className="account-header">
                    <h2>Thông tin tài khoản</h2>
                    <button type="button" className="account-logout-btn">Đăng xuất</button>
                </div>
                <div className="account-media">
                    <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="User Avatar"
                        className="account-avatar"
                    />
                    <div className="account-media-body">
                        <label className="account-upload-btn">
                            Chỉnh Ảnh
                            <input type="file" className="account-fileinput" />
                        </label>
                        <button type="button" className="account-reset-btn">Làm mới</button>
                    </div>
                </div>
                <hr className="account-divider" />
                <div className="account-form">
                    <div className="account-form-group">
                        <label className="account-form-label">Tài Khoản</label>
                        <input type="text" className="account-form-control" value="Tài khoản" readOnly />
                    </div>
                    <div className="account-form-group">
                        <label className="account-form-label">Tên</label>
                        <input type="text" className="account-form-control" value="Huỳnh Anh Quân" readOnly />
                    </div>
                    <div className="account-form-group">
                        <label className="account-form-label">E-mail</label>
                        <input type="email" className="account-form-control" value="haq@mail.com" readOnly />
                    </div>
                    <div className="account-form-group">
                        <label className="account-form-label">Tổ Chức</label>
                        <input type="text" className="account-form-control" value="Plan For Trips" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountGeneral;