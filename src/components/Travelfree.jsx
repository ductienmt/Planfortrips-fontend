import React, { useState } from 'react';
// import '../styles/travelfree.css'
import './styles/userlist.css';
import Sidebar from './Sidebar';

const Travelfree = () => {
    const [places, setPlaces] = useState([
        { id: 1, name: 'Công viên Thống Nhất', location: 'Hà Nội', description: 'Công viên rộng lớn với nhiều hoạt động miễn phí' },
        { id: 2, name: 'Bảo tàng Hồ Chí Minh', location: 'Hà Nội', description: 'Bảo tàng lịch sử về cuộc đời Hồ Chí Minh' },
        { id: 3, name: 'Chợ Bến Thành', location: 'TP. Hồ Chí Minh', description: 'Chợ nổi tiếng với nhiều hàng hóa và thực phẩm' },
        { id: 4, name: 'Biển Mỹ Khê', location: 'Đà Nẵng', description: 'Bãi biển đẹp với cát trắng và nước trong xanh' },
        { id: 5, name: 'Chùa Thiên Mụ', location: 'Huế', description: 'Ngôi chùa cổ nổi tiếng với kiến trúc độc đáo' },
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

    const handleAddPlace = () => setIsAddModalOpen(true);

    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };

    const handleSavePlace = (place) => {
        setPlaces((prevPlaces) => prevPlaces.map(p => p.id === place.id ? place : p));
        setIsEditModalOpen(false);
    };

    const handleAddNewPlace = (place) => {
        setPlaces((prevPlaces) => [...prevPlaces, { ...place, id: prevPlaces.length + 1 }]);
        setIsAddModalOpen(false);
    };

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard--content'>
                <div className="userlist-container">
                    <div className="header">
                        <button className="add-user-button" onClick={handleAddPlace}>Thêm Điểm Tham Quan</button>
                        <h1>Danh Sách Điểm Tham Quan Miễn Phí</h1>
                    </div>
                    <div className="userlist-card">
                        <h3 className="title">Danh Sách Điểm Tham Quan</h3>
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
                                    {places.map((place) => (
                                        <tr key={place.id}>
                                            <td>{place.id}</td>
                                            <td>{place.name}</td>
                                            <td>{place.location}</td>
                                            <td>{place.description}</td>
                                            <td className="actions">
                                                <button className="view-button" onClick={() => handleViewPlace(place)}>Xem</button>
                                                <button className="edit-button" onClick={() => handleEditPlace(place)}>Chỉnh Sửa</button>
                                                <button className="delete-button" onClick={() => setPlaces(places.filter(p => p.id !== place.id))}>Xóa</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* View Place Modal */}
                    {isViewModalOpen && selectedPlace && (
                        <div className="profile-modal">
                            <div className="modal-content">
                                <button className="close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thông Tin Điểm Tham Quan</h2>
                                <div className="profile-info">
                                    <p><strong>ID:</strong> {selectedPlace.id}</p>
                                    <p><strong>Tên:</strong> {selectedPlace.name}</p>
                                    <p><strong>Địa Điểm:</strong> {selectedPlace.location}</p>
                                    <p><strong>Mô Tả:</strong> {selectedPlace.description}</p>
                                </div>
                                <div className="modal-actions">
                                    <button className="edit-button" onClick={() => handleEditPlace(selectedPlace)}>Chỉnh Sửa</button>
                                    <button className="delete-button" onClick={() => setPlaces(places.filter(p => p.id !== selectedPlace.id))}>Xóa</button>
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
                                <h2>Thêm Điểm Tham Quan</h2>
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input type="text" placeholder="Nhập tên điểm tham quan" />
                                    <label>Địa Điểm:</label>
                                    <input type="text" placeholder="Nhập địa điểm" />
                                    <label>Mô Tả:</label>
                                    <input type="text" placeholder="Nhập mô tả" />
                                </div>
                                <div className="modal-actions">
                                    <button className="confirm-button" onClick={() => {
                                        const newPlace = {
                                            id: places.length + 1,
                                            name: document.querySelector('input[placeholder="Nhập tên điểm tham quan"]').value,
                                            location: document.querySelector('input[placeholder="Nhập địa điểm"]').value,
                                            description: document.querySelector('input[placeholder="Nhập mô tả"]').value,
                                        };
                                        handleAddNewPlace(newPlace);
                                    }}>Lưu</button>
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
                                <h2>Chỉnh Sửa Điểm Tham Quan</h2>
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedPlace.name}
                                        onChange={(e) => setSelectedPlace({ ...selectedPlace, name: e.target.value })}
                                    />
                                    <label>Địa Điểm:</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedPlace.location}
                                        onChange={(e) => setSelectedPlace({ ...selectedPlace, location: e.target.value })}
                                    />
                                    <label>Mô Tả:</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedPlace.description}
                                        onChange={(e) => setSelectedPlace({ ...selectedPlace, description: e.target.value })}
                                    />
                                </div>
                                <div className="modal-actions">
                                    <button className="confirm-button" onClick={() => handleSavePlace(selectedPlace)}>Lưu</button>
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

export default Travelfree;
