import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import './styles/hotpage.css'
import './styles/userlist.css';

const HotPage = () => {
    const [places, setPlaces] = useState([
        { id: 1, name: 'Vịnh Hạ Long', region: 'Bắc', location: 'Quảng Ninh', description: 'Kỳ quan thiên nhiên thế giới' },
        { id: 2, name: 'Phố cổ Hội An', region: 'Trung', location: 'Quảng Nam', description: 'Di sản văn hóa thế giới' },
        { id: 3, name: 'Đà Lạt', region: 'Nam', location: 'Lâm Đồng', description: 'Thành phố ngàn hoa' },
        { id: 4, name: 'Sa Pa', region: 'Bắc', location: 'Lào Cai', description: 'Thị trấn sương mù' },
        { id: 5, name: 'Biển Mỹ Khê', region: 'Trung', location: 'Đà Nẵng', description: 'Bãi biển đẹp nhất Việt Nam' },
        { id: 6, name: 'Địa đạo Củ Chi', region: 'Nam', location: 'TP. Hồ Chí Minh', description: 'Di tích lịch sử nổi tiếng' },
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleViewPlace = (place) => {
        setSelectedPlace(place);
        setIsViewModalOpen(true);
    };

    const handleEditPlace = (place) => {
        setSelectedPlace(place);
        setIsEditModalOpen(true);
    };

    const handleAddPlace = () => {
        setSelectedPlace(null);
        setIsAddModalOpen(true);
    };

    const handleDeletePlace = (id) => {
        setPlaces(places.filter(place => place.id !== id));
    };

    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    const renderPlaces = (region) => (
        places.filter(place => place.region === region).map((place) => (
            <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.location}</td>
                <td>{place.description}</td>
                <td className="actions">
                    <button className="view-button" onClick={() => handleViewPlace(place)}>Xem</button>
                    <button className="edit-button" onClick={() => handleEditPlace(place)}>Chỉnh Sửa</button>
                    <button className="delete-button" onClick={() => handleDeletePlace(place.id)}>Xóa</button>
                </td>
            </tr>
        ))
    );

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard--content'>
                <div className="userlist-container">
                    <div className="header">
                        <button className="add-user-button" onClick={handleAddPlace}>Thêm Địa Điểm</button>
                        <h1>Danh Sách Địa Điểm Nổi Tiếng</h1>
                    </div>
                    <div className="userlist-card">
                        <h3 className="title">Miền Bắc</h3>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Địa Điểm</th>
                                        <th>Mô Tả</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderPlaces('Bắc')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="userlist-card">
                        <h3 className="title">Miền Trung</h3>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Địa Điểm</th>
                                        <th>Mô Tả</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderPlaces('Trung')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="userlist-card">
                        <h3 className="title">Miền Nam</h3>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Địa Điểm</th>
                                        <th>Mô Tả</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderPlaces('Nam')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* View Place Modal */}
                    {isViewModalOpen && selectedPlace && (
                        <div className="profile-modal">
                            <div className="modal-content">
                                <button className="close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thông Tin Địa Điểm</h2>
                                <div className="profile-info">
                                    <p><strong>ID:</strong> {selectedPlace.id}</p>
                                    <p><strong>Tên:</strong> {selectedPlace.name}</p>
                                    <p><strong>Địa Điểm:</strong> {selectedPlace.location}</p>
                                    <p><strong>Mô Tả:</strong> {selectedPlace.description}</p>
                                </div>
                                <div className="modal-actions">
                                    <button className="cancel-button" onClick={handleCloseModal}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Place Modal */}
                    {isAddModalOpen && (
                        <div className="profile-modal">
                            <div className="modal-content">
                                <button className="close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thêm Địa Điểm</h2>
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input type="text" placeholder="Nhập tên địa điểm" />
                                    <label>Địa Điểm:</label>
                                    <input type="text" placeholder="Nhập địa điểm" />
                                    <label>Mô Tả:</label>
                                    <input type="text" placeholder="Nhập mô tả" />
                                </div>
                                <div className="modal-actions">
                                    <button className="confirm-button" onClick={() => alert('Lưu địa điểm')}>Lưu</button>
                                    <button className="cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Place Modal */}
                    {isEditModalOpen && selectedPlace && (
                        <div className="profile-modal">
                            <div className="modal-content">
                                <button className="close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chỉnh Sửa Địa Điểm</h2>
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input type="text" defaultValue={selectedPlace.name} />
                                    <label>Địa Điểm:</label>
                                    <input type="text" defaultValue={selectedPlace.location} />
                                    <label>Mô Tả:</label>
                                    <input type="text" defaultValue={selectedPlace.description} />
                                </div>
                                <div className="modal-actions">
                                    <button className="confirm-button" onClick={() => alert('Lưu địa điểm')}>Lưu</button>
                                    <button className="cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HotPage;
