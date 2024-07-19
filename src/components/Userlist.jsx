import React, { useState } from 'react';
import './styles/userlist.css';

const Userlist = () => {
    const [users] = useState([
        { id: 1, name: 'Quan', email: 'Quan@example.com', phone: '123-456-7890', address: 'Ninh Thuan' },
        { id: 2, name: 'Mai', email: 'Mai@example.com', phone: '987-654-3210', address: 'Ha Noi' },
        { id: 3, name: 'Tuan', email: 'Tuan@example.com', phone: '123-456-7890', address: 'Ho Chi Minh' },
        { id: 4, name: 'Lan', email: 'Lan@example.com', phone: '321-654-9870', address: 'Da Nang' },
        { id: 5, name: 'Hoa', email: 'Hoa@example.com', phone: '456-789-1230', address: 'Hue' },
        { id: 6, name: 'Dung', email: 'Dung@example.com', phone: '654-321-0987', address: 'Can Tho' },
        { id: 7, name: 'Ngoc', email: 'Ngoc@example.com', phone: '789-123-4560', address: 'Nha Trang' },
        { id: 8, name: 'Vinh', email: 'Vinh@example.com', phone: '123-987-4560', address: 'Bac Ninh' },
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleViewUser = () => setIsViewModalOpen(true);
    const handleEditUser = () => setIsEditModalOpen(true);
    const handleAddUser = () => setIsAddModalOpen(true);
    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    return (
        <div className="userlist-container">
            <div className="header">
                <button className="add-user-button" onClick={handleAddUser}>Thêm Người Dùng</button>
                <h1>Danh Sách Người Dùng</h1>
            </div>
            <div className="userlist-card">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td className="actions">
                                        <button className="view-button" onClick={handleViewUser}>Xem</button>
                                        <button className="edit-button" onClick={handleEditUser}>Chỉnh Sửa</button>
                                        <button className="delete-button" onClick={() => alert('Xóa người dùng')}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View User Modal */}
            {isViewModalOpen && (
                <div className="profile-modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <h2>Thông Tin Hồ Sơ</h2>
                        <div className="profile-info">
                            <p><strong>Tên:</strong> Quan</p>
                            <p><strong>Email:</strong> Quan@example.com</p>
                            <p><strong>Số Điện Thoại:</strong> 123-456-7890</p>
                            <p><strong>Địa Chỉ:</strong> Cho xin cai dia chi?</p>
                        </div>
                        <div className="modal-actions">
                            <button className="edit-button" onClick={handleEditUser}>Chỉnh Sửa</button>
                            <button className="delete-button" onClick={() => alert('Xóa người dùng')}>Xóa</button>
                            <button className="cancel-button" onClick={handleCloseModal}>Đóng</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add User Modal */}
            {isAddModalOpen && (
                <div className="profile-modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <h2>Thêm Người Dùng</h2>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text" placeholder="Nhập tên người dùng" />
                            <label>Email:</label>
                            <input type="email" placeholder="Nhập email người dùng" />
                            <label>Số Điện Thoại:</label>
                            <input type="text" placeholder="Nhập số điện thoại người dùng" />
                            <label>Địa Chỉ:</label>
                            <input type="text" placeholder="Nhập địa chỉ người dùng" />
                        </div>
                        <div className="modal-actions">
                            <button className="confirm-button" onClick={() => alert('Lưu người dùng')}>Lưu</button>
                            <button className="cancel-button" onClick={handleCloseModal}>Hủy</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Modal */}
            {isEditModalOpen && (
                <div className="profile-modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <h2>Chỉnh Sửa Người Dùng</h2>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text" placeholder="Nhập tên người dùng" />
                            <label>Email:</label>
                            <input type="email" placeholder="Nhập email người dùng" />
                            <label>Số Điện Thoại:</label>
                            <input type="text" placeholder="Nhập số điện thoại người dùng" />
                            <label>Địa Chỉ:</label>
                            <input type="text" placeholder="Nhập địa chỉ người dùng" />
                        </div>
                        <div className="modal-actions">
                            <button className="confirm-button" onClick={() => alert('Lưu người dùng')}>Lưu</button>
                            <button className="cancel-button" onClick={handleCloseModal}>Hủy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Userlist;
