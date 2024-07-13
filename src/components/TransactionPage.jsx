import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './styles/transactionpage.css';

const TransactionPage = () => {
    const [transactions] = useState([
        { id: 1, user: 'Nguyen Van A', date: '01-01-2023', amount: '1000 USD', status: 'Hoàn Thành' },
        { id: 2, user: 'Le Thi B', date: '05-02-2023', amount: '1500 USD', status: 'Đang Xử Lý' },
        { id: 3, user: 'Tran Van C', date: '15-03-2023', amount: '500 USD', status: 'Hoàn Thành' },
        { id: 4, user: 'Nguyen Thi D', date: '25-04-2023', amount: '2000 USD', status: 'Đang Xử Lý' },
        { id: 5, user: 'Le Van E', date: '30-05-2023', amount: '750 USD', status: 'Hoàn Thành' }
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const handleViewTransaction = (transaction) => {
        setSelectedTransaction(transaction);
        setIsViewModalOpen(true);
    };

    const handleEditTransaction = () => setIsEditModalOpen(true);
    const handleAddTransaction = () => setIsAddModalOpen(true);
    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='transactionpage-content'>
                <div className="transactionpage-container">
                    <div className="transactionpage-header">
                        <h1>Danh Sách Giao Dịch</h1>
                        <button className="transactionpage-add-button" onClick={handleAddTransaction}>Thêm Giao Dịch</button>
                    </div>
                    <div className="transactionpage-card">
                        <div className="transactionpage-table-responsive">
                            <table className="transactionpage-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Người Dùng</th>
                                        <th>Ngày</th>
                                        <th>Số Tiền</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.user}</td>
                                            <td>{transaction.date}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.status}</td>
                                            <td className="transactionpage-actions">
                                                <button
                                                    className="transactionpage-view-button"
                                                    onClick={() => handleViewTransaction(transaction)}
                                                >
                                                    Xem
                                                </button>
                                                <button
                                                    className="transactionpage-edit-button"
                                                    onClick={handleEditTransaction}
                                                >
                                                    Chỉnh Sửa
                                                </button>
                                                <button
                                                    className="transactionpage-delete-button"
                                                    onClick={() => alert('Xóa giao dịch')}
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

                    {/* View Transaction Modal */}
                    {isViewModalOpen && selectedTransaction && (
                        <div className="transactionpage-modal">
                            <div className="transactionpage-modal-content">
                                <button className="transactionpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chi Tiết Giao Dịch</h2>
                                <div className="transactionpage-info">
                                    <p><strong>ID:</strong> {selectedTransaction.id}</p>
                                    <p><strong>Người Dùng:</strong> {selectedTransaction.user}</p>
                                    <p><strong>Ngày:</strong> {selectedTransaction.date}</p>
                                    <p><strong>Số Tiền:</strong> {selectedTransaction.amount}</p>
                                    <p><strong>Trạng Thái:</strong> {selectedTransaction.status}</p>
                                </div>
                                <div className="transactionpage-modal-actions">
                                    <button className="transactionpage-cancel-button" onClick={handleCloseModal}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Transaction Modal */}
                    {isAddModalOpen && (
                        <div className="transactionpage-modal">
                            <div className="transactionpage-modal-content">
                                <button className="transactionpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thêm Giao Dịch</h2>
                                <div className="transactionpage-form-group">
                                    <label>Người Dùng:</label>
                                    <input type="text" placeholder="Nhập người dùng" />
                                    <label>Ngày:</label>
                                    <input type="date" />
                                    <label>Số Tiền:</label>
                                    <input type="text" placeholder="Nhập số tiền" />
                                    <label>Trạng Thái:</label>
                                    <select>
                                        <option value="Hoàn Thành">Hoàn Thành</option>
                                        <option value="Đang Xử Lý">Đang Xử Lý</option>
                                    </select>
                                </div>
                                <div className="transactionpage-modal-actions">
                                    <button className="transactionpage-confirm-button" onClick={() => alert('Lưu giao dịch')}>Lưu</button>
                                    <button className="transactionpage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Transaction Modal */}
                    {isEditModalOpen && (
                        <div className="transactionpage-modal">
                            <div className="transactionpage-modal-content">
                                <button className="transactionpage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chỉnh Sửa Giao Dịch</h2>
                                <div className="transactionpage-form-group">
                                    <label>Người Dùng:</label>
                                    <input type="text" placeholder="Nhập người dùng" />
                                    <label>Ngày:</label>
                                    <input type="date" />
                                    <label>Số Tiền:</label>
                                    <input type="text" placeholder="Nhập số tiền" />
                                    <label>Trạng Thái:</label>
                                    <select>
                                        <option value="Hoàn Thành">Hoàn Thành</option>
                                        <option value="Đang Xử Lý">Đang Xử Lý</option>
                                    </select>
                                </div>
                                <div className="transactionpage-modal-actions">
                                    <button className="transactionpage-confirm-button" onClick={() => alert('Lưu giao dịch')}>Lưu</button>
                                    <button className="transactionpage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;