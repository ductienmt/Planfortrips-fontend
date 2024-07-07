import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { BiTrip, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle, BiRepost } from 'react-icons/bi';
import './styles/sidebar.css'
import Content from './Content';
import TransactionPage from './TransactionPage';
import StatisticsPage from './StatisticsPage';
import BusinessPage from './BusinessPage';
import FeedbackPage from './FeedbackPage';
import SupportPage from './SupportPage';
const Sidebar = () => {
    return (
        <div className='dashboard'>

            <div className='menu'>
                <div className="logo">
                    <BiTrip className='logo-icon' />
                    <h2>Plan for trips</h2>
                </div>

                <div className="menu--list">
                    <a href="/content" className="item active">
                        <BiHome className='icon' />
                        Bảng Quản Lí
                    </a>
                </div>

                <div className="menu--list">
                    <a href="/transaction" className="item">
                        <BiTask className='icon' />
                        Giao Dịch
                    </a>
                </div>

                <div className="menu--list">
                    <a href="/business" className="item">
                        <BiStats className='icon' />
                        Doanh Nghiệp
                    </a>
                </div>

                <div className="menu--list">
                    <a href="/feedback" className="item">
                        <BiMessage className='icon' />
                        Phản Hồi
                    </a>
                </div>

                <div className="menu--list">
                    <a href="/statistics" className="item">
                        <BiRepost className='icon' />
                        Thống Kê
                    </a>
                </div>

                <div className="menu--list">
                    <a href="/support" className="item">
                        <BiHelpCircle className='icon' />
                        Hỗ Trợ
                    </a>

                </div>

            </div>


        </div>
    );
};

export default Sidebar;