import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './styles/businesspage.css';

const BusinessPage = () => {
    const [businesses] = useState([
        { id: 1, name: 'Doanh Nghiệp A', owner: 'Nguyen Van A', email: 'a@example.com', phone: '123-456-7890', address: 'Hà Nội' },
        { id: 2, name: 'Doanh Nghiệp B', owner: 'Le Thi B', email: 'b@example.com', phone: '987-654-3210', address: 'TP.HCM' },
        { id: 3, name: 'Doanh Nghiệp C', owner: 'Tran Van C', email: 'c@example.com', phone: '456-789-1230', address: 'Đà Nẵng' },
        { id: 4, name: 'Doanh Nghiệp D', owner: 'Nguyen Thi D', email: 'd@example.com', phone: '654-321-0987', address: 'Hải Phòng' },
        { id: 5, name: 'Doanh Nghiệp E', owner: 'Le Van E', email: 'e@example.com', phone: '789-123-4560', address: 'Huế' },
        { id: 1, name: 'Doanh Nghiệp A', owner: 'Nguyen Van A', email: 'a@example.com', phone: '123-456-7890', address: 'Hà Nội' },
        { id: 2, name: 'Doanh Nghiệp B', owner: 'Le Thi B', email: 'b@example.com', phone: '987-654-3210', address: 'TP.HCM' },
        { id: 3, name: 'Doanh Nghiệp C', owner: 'Tran Van C', email: 'c@example.com', phone: '456-789-1230', address: 'Đà Nẵng' }
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState(null);

    const handleViewBusiness = (business) => {
        setSelectedBusiness(business);
        setIsViewModalOpen(true);
    };

    const handleEditBusiness = () => setIsEditModalOpen(true);
    const handleAddBusiness = () => setIsAddModalOpen(true);
    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    return (
        <div className='businesspage'>
            <Sidebar />
            <div className='businesspage-content'>
                <div className="businesspage-container">
                    <div className="businesspage-header">
                        <h1>Danh Sách Doanh Nghiệp</h1>
                        <button className="businesspage-add-button" onClick={handleAddBusiness}>Thêm Doanh Nghiệp</button>

                    </div>
                    <div className="businesspage-card">

                        <div className="businesspage-table-responsive">
                            <table className="businesspage-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên Doanh Nghiệp</th>
                                        <th>Người Đại Diện</th>
                                        <th>Email</th>
                                        <th>Số Điện Thoại</th>
                                        <th>Địa Chỉ</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {businesses.map((business) => (
                                        <tr key={business.id}>
                                            <td>{business.id}</td>
                                            <td>{business.name}</td>
                                            <td>{business.owner}</td>
                                            <td>{business.email}</td>
                                            <td>{business.phone}</td>
                                            <td>{business.address}</td>
                                            <td className="businesspage-actions">
                                                <button
                                                    className="businesspage-view-button"
                                                    onClick={() => handleViewBusiness(business)}
                                                >
                                                    Xem
                                                </button>
                                                <button
                                                    className="businesspage-edit-button"
                                                    onClick={handleEditBusiness}
                                                >
                                                    Chỉnh Sửa
                                                </button>
                                                <button
                                                    className="businesspage-delete-button"
                                                    onClick={() => alert('Xóa doanh nghiệp')}
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

                    {/* View Business Modal */}
                    {isViewModalOpen && selectedBusiness && (
                        <div className="businesspage-modal">
                            <div className="businesspage-modal-content">
                                <button className="businesspage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thông Tin Doanh Nghiệp</h2>
                                <div className="businesspage-profile-info">
                                    <p><strong>ID:</strong> {selectedBusiness.id}</p>
                                    <p><strong>Tên Doanh Nghiệp:</strong> {selectedBusiness.name}</p>
                                    <p><strong>Người Đại Diện:</strong> {selectedBusiness.owner}</p>
                                    <p><strong>Email:</strong> {selectedBusiness.email}</p>
                                    <p><strong>Số Điện Thoại:</strong> {selectedBusiness.phone}</p>
                                    <p><strong>Địa Chỉ:</strong> {selectedBusiness.address}</p>
                                </div>
                                <div className="businesspage-modal-actions">
                                    <button className="businesspage-cancel-button" onClick={handleCloseModal}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Business Modal */}
                    {isAddModalOpen && (
                        <div className="businesspage-modal">
                            <div className="businesspage-modal-content">
                                <button className="businesspage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thêm Doanh Nghiệp</h2>
                                <div className="businesspage-form-group">
                                    <label>Tên Doanh Nghiệp:</label>
                                    <input type="text" placeholder="Nhập tên doanh nghiệp" />
                                    <label>Người Đại Diện:</label>
                                    <input type="text" placeholder="Nhập người đại diện" />
                                    <label>Email:</label>
                                    <input type="email" placeholder="Nhập email doanh nghiệp" />
                                    <label>Số Điện Thoại:</label>
                                    <input type="text" placeholder="Nhập số điện thoại doanh nghiệp" />
                                    <label>Địa Chỉ:</label>
                                    <input type="text" placeholder="Nhập địa chỉ doanh nghiệp" />
                                </div>
                                <div className="businesspage-modal-actions">
                                    <button className="businesspage-confirm-button" onClick={() => alert('Lưu doanh nghiệp')}>Lưu</button>
                                    <button className="businesspage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Business Modal */}
                    {isEditModalOpen && (
                        <div className="businesspage-modal">
                            <div className="businesspage-modal-content">
                                <button className="businesspage-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chỉnh Sửa Doanh Nghiệp</h2>
                                <div className="businesspage-form-group">
                                    <label>Tên Doanh Nghiệp:</label>
                                    <input type="text" placeholder="Nhập tên doanh nghiệp" />
                                    <label>Người Đại Diện:</label>
                                    <input type="text" placeholder="Nhập người đại diện" />
                                    <label>Email:</label>
                                    <input type="email" placeholder="Nhập email doanh nghiệp" />
                                    <label>Số Điện Thoại:</label>
                                    <input type="text" placeholder="Nhập số điện thoại doanh nghiệp" />
                                    <label>Địa Chỉ:</label>
                                    <input type="text" placeholder="Nhập địa chỉ doanh nghiệp" />
                                </div>
                                <div className="businesspage-modal-actions">
                                    <button className="businesspage-confirm-button" onClick={() => alert('Lưu doanh nghiệp')}>Lưu</button>
                                    <button className="businesspage-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;