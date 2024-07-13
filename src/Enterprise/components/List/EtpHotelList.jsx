import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRate from '@mui/icons-material/StarRate';
import { LocationCity } from '@mui/icons-material';
import { RemoveCircle } from '@mui/icons-material';

// Sample data for hotels
const hotels = [
    {
        hotelId: 'h001',
        hotelName: 'Khách sạn A',
        hotelDes: 'Khách sạn sang trọng với không gian rộng rãi và dịch vụ cao cấp.',
        hotelLocation: '123 Nguyễn Văn A, Quận 1, TP.HCM',
        hotelRate: 4.5,
        hotelRoom : 15,
        thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h002',
        hotelName: 'Resort B',
        hotelDes: 'Resort nằm bên bờ biển, thiên nhiên hoang sơ và các hoạt động ngoài trời.',
        hotelLocation: '456 Nguyễn Thị B, Quận 5, TP.HCM',
        hotelRate: 4.0,
        hotelRoom : 12,
        thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h003',
        hotelName: 'Boutique Hotel C',
        hotelDes: 'Boutique Hotel mang phong cách riêng, nội thất sang trọng và dịch vụ tận tình.',
        hotelLocation: '789 Lê Lợi, Quận 10, TP.HCM',
        hotelRate: 4.2,
        hotelRoom : 20,
        thumbnail: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h004',
        hotelName: 'Khách sạn D',
        hotelDes: 'Khách sạn cao cấp với phòng nghỉ tiện nghi và không gian ấm cúng.',
        hotelLocation: '101 Đường Hoa, Hà Nội',
        hotelRate: 4.7,
        hotelRoom : 17,
        thumbnail: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h005',
        hotelName: 'Resort E',
        hotelDes: 'Resort nghỉ dưỡng giữa thiên nhiên, phục vụ các dịch vụ spa và yoga.',
        hotelLocation: '11 Trần Phú, Hải Phòng',
        hotelRate: 4.3,
        hotelRoom : 23,
        thumbnail: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h006',
        hotelName: 'Boutique Hotel F',
        hotelDes: 'Boutique Hotel hiện đại, mang đến trải nghiệm lưu trú độc đáo.',
        hotelLocation: '321 Nguyễn Văn Linh, Đà Nẵng',
        hotelRate: 4.1,
        thumbnail: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h007',
        hotelName: 'Khách sạn G',
        hotelDes: 'Khách sạn gần biển, phục vụ các món hải sản tươi ngon.',
        hotelLocation: '456 Lê Duẩn, Nha Trang',
        hotelRate: 4.6,
        hotelRoom : 21,
        thumbnail: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h008',
        hotelName: 'Resort H',
        hotelDes: 'Resort với khung cảnh đồi núi, hồ bơi ngoài trời và các hoạt động giải trí.',
        hotelLocation: '789 Nguyễn Huệ, Huế',
        hotelRate: 4.4,
        hotelRoom : 11,
        thumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h009',
        hotelName: 'Boutique Hotel I',
        hotelDes: 'Boutique Hotel sáng tạo với kiến trúc độc đáo và không gian nghỉ ngơi tiện nghi.',
        hotelLocation: '222 Bùi Thị Xuân, Hà Nội',
        hotelRate: 4.8,
        hotelRoom : 27,
        thumbnail: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h010',
        hotelName: 'Khách sạn J',
        hotelDes: 'Khách sạn cao cấp với dịch vụ ăn uống đa dạng và tiện nghi.',
        hotelLocation: '333 Trần Hưng Đạo, Đà Lạt',
        hotelRate: 4.9,
        hotelRoom : 22,
        thumbnail: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h011',
        hotelName: 'Resort K',
        hotelDes: 'Resort nghỉ dưỡng với bể bơi riêng, sân golf và các hoạt động ngoài trời.',
        hotelLocation: '555 Lê Lai, Quy Nhơn',
        hotelRate: 4.0,
        thumbnail: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h012',
        hotelName: 'Boutique Hotel L',
        hotelDes: 'Boutique Hotel mang phong cách cổ điển, không gian yên tĩnh và sang trọng.',
        hotelLocation: '777 Nguyễn Thị Minh Khai, TP.HCM',
        hotelRate: 4.2,
        hotelRoom : 10,
        thumbnail: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        hotelId: 'h013',
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
            <div className="row g-5 justify-content-center">
                {currentHotels.map((hotel, index) => (
                    <div className='card-hotel d-flex flex-column col-6' key={index}>
                        <div className="card-hotel_thumbnail" style={{height : 270, overflow : 'hidden'}}>
                                <img src={hotel.thumbnail} alt="" className=' w-100' 
                                    
                                />
                        </div>

                        <div className="card-hotel_info">
                                <span 
                                className='card-hotel_infor_name d-block my-2'>{hotel.hotelName}</span>
                                <span 
                                className='card-hotel_infor_location d-block fw-bold fs-4 my-2'>
                                  <LocationCity/>  {hotel.hotelLocation}</span>
                                <div className='card-hotel_infor_service d-flex my-2'>
                                    <button className='card-hotel_infor_service-item me-2
                                    btn btn-outline-dark'>Bãi đỗ xe</button>
                                    <button className='card-hotel_infor_service-item me-2
                                    btn btn-outline-dark'>Wifi</button>
                                    <button className='card-hotel_infor_service-item me-2
                                    btn btn-outline-dark'>Hồ bơi</button>
                                </div>
                                <div className="card-hotel_infor_rate">
                                <StarRate style={{fontSize : '19px'}} color='error'/>
                            <StarRate style={{fontSize : '19px'}} color='error'/>
                            <StarRate style={{fontSize : '19px'}} color='error'/>
                            <StarRate style={{fontSize : '19px'}} color='error'/>
                            <StarRate style={{fontSize : '19px', marginRight : '5px'}} color='error'/>

                            <span className='fs-2'>43 người đánh giá</span>
                                </div>

                                <div className="card-hotel_infor_modify">
                                    <span className='fs-2'>Cập nhật 3 phút trước</span>
                                </div>
                                
                        </div>

                        <div className="card-hotel_footer d-flex flex-column">
                           <button className='btn my-2' style={{backgroundColor : 'rgb(178,34,34)', color : 'white'}}>
                           <RemoveCircle/> Xóa</button>
                           <Link to={`../detail/${hotel.hotelId}`} className='btn btn-info my-2'>Chi tiết</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default EtpHotelList;
