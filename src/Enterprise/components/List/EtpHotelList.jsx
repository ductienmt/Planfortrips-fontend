import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for hotels
const hotels = [
    {
        hotelName: 'Khách sạn A',
        hotelDes: 'Khách sạn sang trọng với không gian rộng rãi và dịch vụ cao cấp.',
        hotelLocation: '123 Nguyễn Văn A, Quận 1, TP.HCM',
        hotelRate: 4.5,
        hotelRoom : 15,
        thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Resort B',
        hotelDes: 'Resort nằm bên bờ biển, thiên nhiên hoang sơ và các hoạt động ngoài trời.',
        hotelLocation: '456 Nguyễn Thị B, Quận 5, TP.HCM',
        hotelRate: 4.0,
        hotelRoom : 12,
        thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Boutique Hotel C',
        hotelDes: 'Boutique Hotel mang phong cách riêng, nội thất sang trọng và dịch vụ tận tình.',
        hotelLocation: '789 Lê Lợi, Quận 10, TP.HCM',
        hotelRate: 4.2,
        hotelRoom : 20,
        thumbnail: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Khách sạn D',
        hotelDes: 'Khách sạn cao cấp với phòng nghỉ tiện nghi và không gian ấm cúng.',
        hotelLocation: '101 Đường Hoa, Hà Nội',
        hotelRate: 4.7,
        hotelRoom : 17,
        thumbnail: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Resort E',
        hotelDes: 'Resort nghỉ dưỡng giữa thiên nhiên, phục vụ các dịch vụ spa và yoga.',
        hotelLocation: '11 Trần Phú, Hải Phòng',
        hotelRate: 4.3,
        hotelRoom : 23,
        thumbnail: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Boutique Hotel F',
        hotelDes: 'Boutique Hotel hiện đại, mang đến trải nghiệm lưu trú độc đáo.',
        hotelLocation: '321 Nguyễn Văn Linh, Đà Nẵng',
        hotelRate: 4.1,
        thumbnail: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Khách sạn G',
        hotelDes: 'Khách sạn gần biển, phục vụ các món hải sản tươi ngon.',
        hotelLocation: '456 Lê Duẩn, Nha Trang',
        hotelRate: 4.6,
        hotelRoom : 21,
        thumbnail: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Resort H',
        hotelDes: 'Resort với khung cảnh đồi núi, hồ bơi ngoài trời và các hoạt động giải trí.',
        hotelLocation: '789 Nguyễn Huệ, Huế',
        hotelRate: 4.4,
        hotelRoom : 11,
        thumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Boutique Hotel I',
        hotelDes: 'Boutique Hotel sáng tạo với kiến trúc độc đáo và không gian nghỉ ngơi tiện nghi.',
        hotelLocation: '222 Bùi Thị Xuân, Hà Nội',
        hotelRate: 4.8,
        hotelRoom : 27,
        thumbnail: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Khách sạn J',
        hotelDes: 'Khách sạn cao cấp với dịch vụ ăn uống đa dạng và tiện nghi.',
        hotelLocation: '333 Trần Hưng Đạo, Đà Lạt',
        hotelRate: 4.9,
        hotelRoom : 22,
        thumbnail: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Resort K',
        hotelDes: 'Resort nghỉ dưỡng với bể bơi riêng, sân golf và các hoạt động ngoài trời.',
        hotelLocation: '555 Lê Lai, Quy Nhơn',
        hotelRate: 4.0,
        thumbnail: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Boutique Hotel L',
        hotelDes: 'Boutique Hotel mang phong cách cổ điển, không gian yên tĩnh và sang trọng.',
        hotelLocation: '777 Nguyễn Thị Minh Khai, TP.HCM',
        hotelRate: 4.2,
        hotelRoom : 10,
        thumbnail: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelName: 'Khách sạn M',
        hotelDes: 'Khách sạn cao cấp với phòng nghỉ rộng rãi và dịch vụ tiện ích.',
        hotelLocation: '999 Điện Biên Phủ, Hà Nội',
        hotelRate: 4.8,
        hotelRoom : 10,
        thumbnail: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const PAGE_SIZE = 4; // Number of hotels per page

function EtpHotelList() {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate pagination
    const indexOfLastHotel = currentPage * PAGE_SIZE;
    const indexOfFirstHotel = indexOfLastHotel - PAGE_SIZE;
    const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h5 className="card-title">Danh sách khách sạn</h5>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-4">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Trang trước</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link">{currentPage}</button>
                    </li>
                    <li className={`page-item ${currentHotels.length < PAGE_SIZE ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Trang sau</button>
                    </li>
                </ul>
            </nav>
            <div className="row">
                {currentHotels.map((hotel, index) => (
                    <div className="col-6 mb-4" key={index} >
                        <div className="card bg-dark text-white" style={{height : '18rem', overflow : 'hidden'}}>
                            <img className="card-img" src={hotel.thumbnail} alt="Card image" />
                            <div className="
                            card-img-overlay d-flex flex-column justify-content-between" style={{background : 'rgba(71, 150, 187, 0.2)'}}>
                                <div className="info">
                                <h5 className="card-title text-info">{hotel.hotelName}</h5>
                                <p className="card-text">
                                   <span className='fw-bold text-danger'>Mô tả : </span> {hotel.hotelDes}
                                </p>
                                <p className="card-text">
                                  Đánh giá : <span className='fs-4 fw-bold' style={{color : 'yellow'}}>{hotel.hotelRate}
                                  <i class="ti ti-star"></i>
                                    </span></p>
                                  <p className="card-text">
                                  Số phòng : <span className='fs-4 fw-bold text-info'>{hotel.hotelRoom}
                                  <i class="ti ti-door"></i>
                                    </span></p>
                                </div>
                                
                                <div className="function">
                                <button className='btn btn-warning me-2'>Xóa</button>
                                <button className='btn btn-outline-info'>Chi tiết</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default EtpHotelList;
