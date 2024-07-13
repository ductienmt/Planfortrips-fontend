import React from 'react';
import './styles/statisticspage.css';
import Sidebar from './Sidebar';
import { BiBarChart, BiUserPlus, BiPieChart, BiBriefcase, BiBuilding, BiStar } from 'react-icons/bi';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

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
        title: 'Đánh Giá Từ Người Dùng',
        value: '4.5/5',
        icon: <BiStar />,
        color: '#1dd1a1'
    }
];

const partnerStatistics = [
    {
        id: 1,
        title: 'Doanh Nghiệp Hợp Tác',
        value: '50',
        icon: <BiBriefcase />,
        color: '#ffcc5c'
    },
    {
        id: 2,
        title: 'Số Lượng Dự Án',
        value: '0',
        icon: <BiBuilding />,
        color: '#96c93d'
    },
    {
        id: 3,
        title: 'Đánh Giá Từ Đối Tác',
        value: '4.8/5',
        icon: <BiStar />,
        color: '#ff9f43'
    }
];

const barChartData = {
    labels: ['Lượt Truy Cập', 'Lượt Đăng Ký'],
    datasets: [
        {
            label: 'Số lượng',
            data: [1200, 300,],
            backgroundColor: ['#ff6b6b', '#54a0ff',]

        }
    ]
};

const pieChartData = {
    labels: ['Lượt Đăng Ký', 'Lượt Sử Dụng'],
    datasets: [
        {
            data: [300, 900],
            backgroundColor: ['#54a0ff', '#1dd1a1'],
            hoverOffset: 4
        }
    ]
};

const StatisticsPage = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='statistics-page'>
                <div className='statistics-header'>
                    <h1 className='title'>Thống Kê</h1>
                </div>
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
                <div className='partner-statistics'>
                    <h2 className='section-title'>Doanh Nghiệp Hợp Tác</h2>
                    <div className='statistics-cards'>
                        {partnerStatistics.map((stat) => (
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
                <div className='chart-container'>
                    <div className='chart'>
                        <h2>Biểu Đồ Cột</h2>
                        <div className='bar-chart-box'>
                            <Bar data={barChartData} options={{ maintainAspectRatio: false, responsive: true }} height={200} />
                        </div>
                    </div>
                    <div className='chart'>
                        <h2>Biểu Đồ Hình Tròn</h2>
                        <div className='pie-chart-box'>
                            <Pie data={pieChartData} options={{ maintainAspectRatio: false, responsive: true }} height={200} />
                        </div>
                    </div>
                </div>
                <div className='sales-info'>
                    <div className='sales-box'>
                        <div className='bottom-ele'>
                            <h6 className='sales-title'>Tổng Doanh Thu</h6>

                        </div>
                        <h3 className='sales-amount'>$3,787,681.00</h3>
                        <p className='sales-comparison'>$3,578.90 trong tháng trước</p>
                        <div className='sales-chart'>
                            {/* Placeholder for any additional chart */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
