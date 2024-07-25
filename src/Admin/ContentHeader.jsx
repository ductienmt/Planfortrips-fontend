import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiNotification, BiSolidUser } from 'react-icons/bi';
import '../Admin/styles/content.css'
import logo from '../assets/img/planfortrips-logo.png';
const ContentHeader = () => {
    return (
        <div className='content--header'>

            <div className="AdminHeader-logo">
                <Link to="/">
                    <img src={logo} alt="Planfortrips Logo" className="logo-img" />
                </Link>
            </div>

            <div className="header--activity">
                <div className="search--box">
                    <input type="text" placeholder='Tìm Kiếm' />
                    <BiSearch className='icon' />
                </div>

                <div className="notify">
                    <Link to="/admin/adminaccount" className="menu-item">
                        <BiSolidUser className='icon' />

                    </Link>
                </div>

            </div>

        </div>
    );
};

export default ContentHeader;