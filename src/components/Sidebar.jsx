import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHome, BiMessage, BiStats, BiTask, BiRepost, BiMenu, BiSolidChevronsRight, BiSolidHot } from 'react-icons/bi';
import logo from '../assets/img/planfortrips-logo.png';
import './styles/sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {!isCollapsed && (
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Planfortrips Logo" className="logo-img" />
                    </Link>
                </div>
            )}

            <div className="menu">
                <Link to="/admin" className="menu-item">
                    <BiHome className='icon' />
                    {!isCollapsed && <span>Thống Kê</span>}
                </Link>

                <Link to="/admin/userlist" className="menu-item">
                    <BiRepost className='icon' />
                    {!isCollapsed && <span>Bảng Quản Lí</span>}
                </Link>
                <Link to="/admin/transaction" className="menu-item">
                    <BiTask className='icon' />
                    {!isCollapsed && <span>Giao Dịch</span>}
                </Link>

                <Link to="/admin/business" className="menu-item">
                    <BiStats className='icon' />
                    {!isCollapsed && <span>Doanh Nghiệp</span>}
                </Link>

                <Link to="/admin/feedback" className="menu-item">
                    <BiMessage className='icon' />
                    {!isCollapsed && <span>Phản Hồi</span>}
                </Link>

                <Link to="/admin/travelfree" className="menu-item">
                    <BiSolidChevronsRight className='icon' />
                    {!isCollapsed && <span>Điểm Tham Quan</span>}
                </Link>

                <Link to="/admin/hot" className="menu-item">
                    <BiSolidHot className='icon' />
                    {!isCollapsed && <span>Bắc,Trung,Nam</span>}
                </Link>
            </div>

            <button className="toggle-button" onClick={handleToggleSidebar}>
                <BiMenu />
            </button>
        </div>
    );
};

export default Sidebar;
