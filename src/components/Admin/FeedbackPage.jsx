import React from 'react';
import './styles/feedbackpage.css';
import { BiTrash, BiEdit } from 'react-icons/bi';
import Sidebar from './Sidebar';

const feedbacks = [
    {
        id: 1,
        name: 'Nguyen Van A',
        date: '1-1-2023',
        feedback: 'Tôi rất hài lòng với dịch vụ này!'
    },
    {
        id: 2,
        name: 'Le Thi B',
        date: '5-2-2023',
        feedback: 'Sản phẩm rất tốt, tôi sẽ giới thiệu cho bạn bè!'
    },
    {
        id: 3,
        name: 'Tran Van C',
        date: '15-3-2023',
        feedback: 'Giao hàng nhanh chóng và chất lượng!'
    }
];

const FeedbackPage = () => {
    return (

        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='feedback-page'>
                    <h1>Danh Sách Phản Hồi</h1>
                    <table className='feedback-table'>
                        <thead>
                            <tr>
                                <th>Người Dùng</th>
                                <th>Ngày</th>
                                <th>Phản Hồi</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.feedback}</td>
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

export default FeedbackPage;
