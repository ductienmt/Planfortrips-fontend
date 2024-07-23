import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHome, BiMessage, BiStats, BiTask, BiRepost, BiMenu, BiMapAlt, BiSolidUser, BiLogOut } from 'react-icons/bi';
import logo from '../assets/img/planfortrips-logo.png';
import './styles/sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Planfortrips Logo" className="logo-img" />
                    </Link>
                </div>

                <div className="menu">
                    <Link to="/admin" className="menu-item">
                        <BiHome className='icon' />
                        <span>Thống Kê</span>
                    </Link>

                    <Link to="/admin/userlist" className="menu-item">
                        <BiTask className='icon' />
                        <span>Bảng Quản Lí</span>
                    </Link>
                    <Link to="/admin/transaction" className="menu-item">
                        <BiRepost className='icon' />
                        <span>Giao Dịch</span>
                    </Link>

                    <Link to="/admin/business" className="menu-item">
                        <BiStats className='icon' />
                        <span>Doanh Nghiệp</span>
                    </Link>

                    <Link to="/admin/feedback" className="menu-item">
                        <BiMessage className='icon' />
                        <span>Phản Hồi</span>
                    </Link>

                    <Link to="/admin/travelfree" className="menu-item">
                        <BiMapAlt className='icon' />
                        <span>Điểm Tham Quan</span>
                    </Link>

                    <Link to="/" className="menu-item">
                        <BiLogOut className='icon' />
                        <span>Đăng Xuất</span>
                    </Link>
                </div>
            </div>

            <button className="toggle-button" onClick={handleToggleSidebar}>
                <BiMenu />
            </button>
        </div>
    );
};

export default Sidebar;