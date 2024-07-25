import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../Admin/styles/travelfree.css'
import ContentHeader from './ContentHeader';

const TravelPage = () => {
    const [places, setPlaces] = useState([
        { id: 1, name: 'Vịnh Hạ Long', region: 'Bắc', location: 'Quảng Ninh', description: 'Kỳ quan thiên nhiên thế giới', price: 'Miễn phí' },
        { id: 2, name: 'Phố cổ Hội An', region: 'Trung', location: 'Quảng Nam', description: 'Di sản văn hóa thế giới', price: 'Mất phí' },
        { id: 3, name: 'Đà Lạt', region: 'Nam', location: 'Lâm Đồng', description: 'Thành phố ngàn hoa', price: 'Miễn phí' },
        { id: 4, name: 'Sa Pa', region: 'Bắc', location: 'Lào Cai', description: 'Thị trấn sương mù', price: 'Mất phí' },
        { id: 5, name: 'Biển Mỹ Khê', region: 'Trung', location: 'Đà Nẵng', description: 'Bãi biển đẹp nhất', price: 'Miễn phí' }
    ]);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [filterRegion, setFilterRegion] = useState('Tất cả');
    const [filterPrice, setFilterPrice] = useState('Tất cả');

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

    const filteredPlaces = places.filter(place =>
        (filterRegion === 'Tất cả' || place.region === filterRegion) &&
        (filterPrice === 'Tất cả' || place.price === filterPrice)
    );

    return (
        <div className="travel">
            <ContentHeader />
            <Sidebar />
            <div className="travel-content">
                <div className="travel-container">
                    <div className="travel-header">
                        <h1>Danh Sách Điểm Tham Quan</h1>
                        <button className="travel-add-button" onClick={handleAddPlace}>Thêm Điểm Tham Quan</button>
                    </div>
                    <div className="travel-card">
                        <div className="travel-filter">
                            <label htmlFor="region-filter">Lọc theo vùng:</label>
                            <select id="region-filter" value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} className="travel-select">
                                <option value="Tất cả">Tất cả</option>
                                <option value="Bắc">Bắc</option>
                                <option value="Trung">Trung</option>
                                <option value="Nam">Nam</option>
                            </select>
                            <label htmlFor="price-filter">Lọc theo giá:</label>
                            <select id="price-filter" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="travel-select">
                                <option value="Tất cả">Tất cả</option>
                                <option value="Miễn phí">Miễn phí</option>
                                <option value="Mất phí">Mất phí</option>
                            </select>
                        </div>
                        <div className="travel-table-responsive">
                            <table className="travel-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Vùng</th>
                                        <th>Địa Điểm</th>
                                        <th>Mô Tả</th>
                                        <th>Giá</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPlaces.map((place) => (
                                        <tr key={place.id}>
                                            <td>{place.id}</td>
                                            <td>{place.name}</td>
                                            <td>{place.region}</td>
                                            <td>{place.location}</td>
                                            <td>{place.description}</td>
                                            <td>{place.price}</td>
                                            <td className="travel-actions">
                                                <button className="travel-view-button" onClick={() => handleViewPlace(place)}>Xem</button>
                                                <button className="travel-edit-button" onClick={() => handleEditPlace(place)}>Chỉnh Sửa</button>
                                                <button className="travel-delete-button" onClick={() => setPlaces(places.filter(p => p.id !== place.id))}>Xóa</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* View Place Modal */}
                    {isViewModalOpen && selectedPlace && (
                        <div className={`travel-modal ${isViewModalOpen ? 'open' : ''}`}>
                            <div className="travel-modal-content">
                                <button className="travel-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thông Tin Điểm Tham Quan</h2>
                                <div className="travel-info">
                                    <p><strong>ID:</strong> {selectedPlace.id}</p>
                                    <p><strong>Tên:</strong> {selectedPlace.name}</p>
                                    <p><strong>Vùng:</strong> {selectedPlace.region}</p>
                                    <p><strong>Địa Điểm:</strong> {selectedPlace.location}</p>
                                    <p><strong>Mô Tả:</strong> {selectedPlace.description}</p>
                                    <p><strong>Giá:</strong> {selectedPlace.price}</p>
                                </div>
                                <div className="travel-modal-actions">
                                    <button className="travel-cancel-button" onClick={handleCloseModal}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Place Modal */}
                    {isAddModalOpen && (
                        <div className={`travel-modal ${isAddModalOpen ? 'open' : ''}`}>
                            <div className="travel-modal-content">
                                <button className="travel-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Thêm Điểm Tham Quan</h2>
                                <div className="travel-form-group">
                                    <label>Tên:</label>
                                    <input type="text" placeholder="Nhập tên điểm tham quan" />
                                    <label>Vùng:</label>
                                    <input type="text" placeholder="Nhập vùng" />
                                    <label>Địa Điểm:</label>
                                    <input type="text" placeholder="Nhập địa điểm" />
                                    <label>Mô Tả:</label>
                                    <input type="text" placeholder="Nhập mô tả" />
                                    <label>Giá:</label>
                                    <select>
                                        <option value="Miễn phí">Miễn phí</option>
                                        <option value="Mất phí">Mất phí</option>
                                    </select>
                                </div>
                                <div className="travel-modal-actions">
                                    <button className="travel-confirm-button" onClick={() => {
                                        const newPlace = {
                                            id: places.length + 1,
                                            name: document.querySelector('input[placeholder="Nhập tên điểm tham quan"]').value,
                                            region: document.querySelector('input[placeholder="Nhập vùng"]').value,
                                            location: document.querySelector('input[placeholder="Nhập địa điểm"]').value,
                                            description: document.querySelector('input[placeholder="Nhập mô tả"]').value,
                                            price: document.querySelector('select').value,
                                        };
                                        handleAddNewPlace(newPlace);
                                    }}>Lưu</button>
                                    <button className="travel-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Place Modal */}
                    {isEditModalOpen && selectedPlace && (
                        <div className={`travel-modal ${isEditModalOpen ? 'open' : ''}`}>
                            <div className="travel-modal-content">
                                <button className="travel-close-button" onClick={handleCloseModal}>×</button>
                                <h2>Chỉnh Sửa Điểm Tham Quan</h2>
                                <div className="travel-form-group">
                                    <label>Tên:</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedPlace.name}
                                        onChange={(e) => setSelectedPlace({ ...selectedPlace, name: e.target.value })}
                                    />
                                    <label>Vùng:</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedPlace.region}
                                        onChange={(e) => setSelectedPlace({ ...selectedPlace, region: e.target.value })}
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
                                    <label>Giá:</label>
                                    <select value={selectedPlace.price} onChange={(e) => setSelectedPlace({ ...selectedPlace, price: e.target.value })}>
                                        <option value="Miễn phí">Miễn phí</option>
                                        <option value="Mất phí">Mất phí</option>
                                    </select>
                                </div>
                                <div className="travel-modal-actions">
                                    <button className="travel-confirm-button" onClick={() => handleSavePlace(selectedPlace)}>Lưu</button>
                                    <button className="travel-cancel-button" onClick={handleCloseModal}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TravelPage;