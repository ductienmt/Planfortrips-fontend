import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './styles/feedbackpage.css';

const FeedbackPage = () => {
    const [feedbacks] = useState([
        { id: 1, user: 'Nguyen Van A', email: 'a@example.com', content: 'Phản hồi A', date: '2024-07-01' },
        { id: 2, user: 'Le Thi B', email: 'b@example.com', content: 'Phản hồi B', date: '2024-07-02' },
        { id: 3, user: 'Tran Van C', email: 'c@example.com', content: 'Phản hồi C', date: '2024-07-03' },
        { id: 4, user: 'Nguyen Thi D', email: 'd@example.com', content: 'Phản hồi D', date: '2024-07-04' },
        { id: 5, user: 'Le Van E', email: 'e@example.com', content: 'Phản hồi E', date: '2024-07-05' },
        { id: 1, user: 'Nguyen Van A', email: 'a@example.com', content: 'Phản hồi A', date: '2024-07-01' },
        { id: 2, user: 'Le Thi B', email: 'b@example.com', content: 'Phản hồi B', date: '2024-07-02' },
        { id: 3, user: 'Tran Van C', email: 'c@example.com', content: 'Phản hồi C', date: '2024-07-03' },
        { id: 4, user: 'Nguyen Thi D', email: 'd@example.com', content: 'Phản hồi D', date: '2024-07-04' },
        { id: 5, user: 'Le Van E', email: 'e@example.com', content: 'Phản hồi E', date: '2024-07-05' }
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const handleViewFeedback = (feedback) => {
        setSelectedFeedback(feedback);
        setIsViewModalOpen(true);
    };

    const handleEditFeedback = () => setIsEditModalOpen(true);
    const handleAddFeedback = () => setIsAddModalOpen(true);
    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    return (
        <div className='feedbackpage'>
            <Sidebar />
            <div className='feedbackpage--content'>
                <div className="feedbackpage-container">
                    <div className="feedbackpage-header">
                        <h1>Danh Sách Phản Hồi</h1>
                        <button className="feedbackpage-add-button" onClick={handleAddFeedback}>Thêm Phản Hồi</button>
                    </div>
                    <div className="feedbackpage-card">
                        <div className="feedbackpage-table-responsive">
                            <table className="feedbackpage-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Người Dùng</th>
                                        <th>Email</th>
                                        <th>Nội Dung</th>
                                        <th>Ngày</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedbacks.map((feedback) => (
                                        <tr key={feedback.id}>
                                            <td>{feedback.id}</td>
                                            <td>{feedback.user}</td>
                                            <td>{feedback.email}</td>
                                            <td>{feedback.content}</td>
                                            <td>{feedback.date}</td>
                                            <td className="feedbackpage-actions">
                                                <button
                                                    className="feedbackpage-view-button"
                                                    onClick={() => handleViewFeedback(feedback)}
                                                >
                                                    Xem
                                                </button>
                                                <button
                                                    className="feedbackpage-edit-button"
                                                    onClick={handleEditFeedback}
                                                >
                                                    Chỉnh Sửa
                                                </button>
                                                <button
                                                    className="feedbackpage-delete-button"
                                                    onClick={() => alert('Xóa phản hồi')}
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* View Feedback Modal */}
                    {isViewModalOpen && selectedFeedback && (
                        <div className="feedbackpage-modal">
                            <div className="feedbackpage-modal-content">
                                <button className="feedbackpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thông Tin Phản Hồi</h2>
                                <div className="feedbackpage-info">
                                    <p><strong>ID:</strong> {selectedFeedback.id}</p>
                                    <p><strong>Người Dùng:</strong> {selectedFeedback.user}</p>
                                    <p><strong>Email:</strong> {selectedFeedback.email}</p>
                                    <p><strong>Nội Dung:</strong> {selectedFeedback.content}</p>
                                    <p><strong>Ngày:</strong> {selectedFeedback.date}</p>
                                </div>
                                <div className="feedbackpage-modal-actions">

                                    <button className="feedbackpage-cancel-button" onClick={handleCloseModal}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Feedback Modal */}
                    {isAddModalOpen && (
                        <div className="feedbackpage-modal">
                            <div className="feedbackpage-modal-content">
                                <button className="feedbackpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thêm Phản Hồi</h2>
                                <div className="feedbackpage-form-group">
                                    <label>Người Dùng:</label>
                                    <input type="text" placeholder="Nhập tên người dùng" />
                                    <label>Email:</label>
                                    <input type="email" placeholder="Nhập email người dùng" />
                                    <label>Nội Dung:</label>
                                    <input type="text" placeholder="Nhập nội dung phản hồi" />
                                    <label>Ngày:</label>
                                    <input type="date" placeholder="Nhập ngày phản hồi" />
                                </div>
                                <div className="feedbackpage-modal-actions">
                                    <button className="feedbackpage-confirm-button" onClick={() => alert('Lưu phản hồi')}>Lưu</button>
                                    <button className="feedbackpage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Feedback Modal */}
                    {isEditModalOpen && (
                        <div className="feedbackpage-modal">
                            <div className="feedbackpage-modal-content">
                                <button className="feedbackpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chỉnh Sửa Phản Hồi</h2>
                                <div className="feedbackpage-form-group">
                                    <label>Người Dùng:</label>
                                    <input type="text" placeholder="Nhập tên người dùng" />
                                    <label>Email:</label>
                                    <input type="email" placeholder="Nhập email người dùng" />
                                    <label>Nội Dung:</label>
                                    <input type="text" placeholder="Nhập nội dung phản hồi" />
                                    <label>Ngày:</label>
                                    <input type="date" placeholder="Nhập ngày phản hồi" />
                                </div>
                                <div className="feedbackpage-modal-actions">
                                    <button className="feedbackpage-confirm-button" onClick={() => alert('Lưu phản hồi')}>Lưu</button>
                                    <button className="feedbackpage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;