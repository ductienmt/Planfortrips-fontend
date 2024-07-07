import React from 'react';
import './styles/statisticspage.css';
import { BiBarChart, BiUserPlus, BiPieChart } from 'react-icons/bi';
import Sidebar from './Sidebar';

const statistics = [
    {
        id: 1,
        title: 'Lượt Truy Cập',
        value: '1,200',
        icon: <BiBarChart />,
        color: '#ff6b6b'
    },
    {
        id: 2,
        title: 'Lượt Đăng Ký',
        value: '300',
        icon: <BiUserPlus />,
        color: '#54a0ff'
    },
    {
        id: 3,
        title: 'Lượt Sử Dụng',
        value: '900',
        icon: <BiPieChart />,
        color: '#1dd1a1'
    }
];

const StatisticsPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='statistics-page'>
                    <h1>Thống Kê</h1>
                    <div className='statistics-cards'>
                        {statistics.map((stat) => (
                            <div key={stat.id} className='statistics-card' style={{ borderColor: stat.color }}>
                                <div className='card-icon' style={{ backgroundColor: stat.color }}>
                                    {stat.icon}
                                </div>
                                <div className='card-details'>
                                    <h2>{stat.title}</h2>
                                    <p>{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
