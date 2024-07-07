import React from 'react';
import './styles/businesspage.css';
import { BiTrash, BiEdit } from 'react-icons/bi';
import Sidebar from './Sidebar';

// Dữ liệu mẫu cho các doanh nghiệp
const businesses = [
    {
        id: 1,
        name: 'Doanh Nghiệp A',
        location: 'Hà Nội',
        revenue: '200,000 USD',
        employees: '50'
    },
    {
        id: 2,
        name: 'Doanh Nghiệp B',
        location: 'Hồ Chí Minh',
        revenue: '150,000 USD',
        employees: '30'
    },
    {
        id: 3,
        name: 'Doanh Nghiệp C',
        location: 'Đà Nẵng',
        revenue: '100,000 USD',
        employees: '20'
    }
];

const BusinessPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='business-page'>
                    <h1>Quản Lý Doanh Nghiệp</h1>
                    <table className='business-table'>
                        <thead>
                            <tr>
                                <th>Tên Doanh Nghiệp</th>
                                <th>Vị Trí</th>
                                <th>Doanh Thu</th>
                                <th>Số Nhân Viên</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businesses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.employees}</td>
                                    <td className='actions'>
                                        <button className='edit-btn'>
                                            <BiEdit />
                                        </button>
                                        <button className='delete-btn'>
                                            <BiTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;
