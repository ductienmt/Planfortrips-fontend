import React, { useState } from 'react';
import './styles/transactionpage.css';
import { BiTrash, BiEdit } from 'react-icons/bi';
import Sidebar from './Sidebar';

const transactions = [
    {
        id: 1,
        user: 'Nguyen Van A',
        date: '1-1-2023',
        amount: '1000 USD',
        status: 'Hoàn Thành'
    },
    {
        id: 2,
        user: 'Le Thi B',
        date: '5-2-2023',
        amount: '1500 USD',
        status: 'Đang Xử Lý'
    },
    {
        id: 3,
        user: 'Tran Van C',
        date: '15-3-2023',
        amount: '500 USD',
        status: 'Hoàn Thành'
    }
];

const TransactionPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='transaction-page'>
                    <h1>Quản Lý Giao Dịch</h1>
                    <table className='transaction-table'>
                        <thead>
                            <tr>
                                <th>Người Dùng</th>
                                <th>Ngày</th>
                                <th>Số Tiền</th>
                                <th>Trạng Thái</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.user}</td>
                                    <td>{item.date}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.status}</td>
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

export default TransactionPage;
