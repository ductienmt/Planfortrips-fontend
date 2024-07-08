import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for restaurants
const restaurants = [
  {
    restaurantName: 'Nhà hàng A',
    restaurantDes: 'Nhà hàng sang trọng phục vụ các món ăn truyền thống Việt Nam.',
    restaurantLocation: '123 Nguyễn Văn A, Quận 1, TP.HCM',
    restaurantRate: 4.5,
    thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Quán ăn B',
    restaurantDes: 'Quán ăn gia đình, phục vụ các món ăn nấu từ lòng đất.',
    restaurantLocation: '456 Nguyễn Thị B, Quận 5, TP.HCM',
    restaurantRate: 3.8,
    thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Tiệm cà phê C',
    restaurantDes: 'Tiệm cà phê yên tĩnh, phục vụ các loại thức uống đậm đà.',
    restaurantLocation: '789 Lê Lợi, Quận 10, TP.HCM',
    restaurantRate: 4.2,
    thumbnail: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Nhà hàng D',
    restaurantDes: 'Nhà hàng phong cách châu Âu, đồ ăn ngon, không gian lãng mạn.',
    restaurantLocation: '101 Đường Hoa, Hà Nội',
    restaurantRate: 4.7,
    thumbnail: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Quán ăn E',
    restaurantDes: 'Quán ăn đơn giản, phục vụ các món ăn đường phố nổi tiếng.',
    restaurantLocation: '11 Trần Phú, Hải Phòng',
    restaurantRate: 4.0,
    thumbnail: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Tiệm cà phê F',
    restaurantDes: 'Tiệm cà phê hiện đại, phục vụ các thức uống phổ biến.',
    restaurantLocation: '321 Nguyễn Văn Linh, Đà Nẵng',
    restaurantRate: 4.3,
    thumbnail: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Nhà hàng G',
    restaurantDes: 'Nhà hàng hải sản tươi sống, phục vụ các món biển hấp dẫn.',
    restaurantLocation: '456 Lê Duẩn, Nha Trang',
    restaurantRate: 4.6,
    thumbnail: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Quán ăn H',
    restaurantDes: 'Quán ăn gia đình, phục vụ các món ăn miền Trung truyền thống.',
    restaurantLocation: '789 Nguyễn Huệ, Huế',
    restaurantRate: 4.1,
    thumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Tiệm cà phê I',
    restaurantDes: 'Tiệm cà phê sáng tạo, phục vụ các thức uống độc đáo.',
    restaurantLocation: '222 Bùi Thị Xuân, Hà Nội',
    restaurantRate: 4.4,
    thumbnail: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Nhà hàng J',
    restaurantDes: 'Nhà hàng buffet, đa dạng món ăn quốc tế, không gian rộng rãi.',
    restaurantLocation: '333 Trần Hưng Đạo, Đà Lạt',
    restaurantRate: 4.9,
    thumbnail: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Quán ăn K',
    restaurantDes: 'Quán ăn phục vụ các món ăn đặc sản vùng miền.',
    restaurantLocation: '555 Lê Lai, Quy Nhơn',
    restaurantRate: 3.9,
    thumbnail: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Tiệm cà phê L',
    restaurantDes: 'Tiệm cà phê phong cách cổ điển, không gian ấm cúng.',
    restaurantLocation: '777 Nguyễn Thị Minh Khai, TP.HCM',
    restaurantRate: 4.2,
    thumbnail: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    restaurantName: 'Nhà hàng M',
    restaurantDes: 'Nhà hàng sang trọng, phục vụ các món ăn Âu châu cao cấp.',
    restaurantLocation: '999 Điện Biên Phủ, Hà Nội',
    restaurantRate: 4.8,
    thumbnail: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const PAGE_SIZE = 4; // Number of restaurants per page

function EtpRestaurantList() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const indexOfLastRestaurant = currentPage * PAGE_SIZE;
  const indexOfFirstRestaurant = indexOfLastRestaurant - PAGE_SIZE;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h5 className="card-title">Danh sách nhà hàng</h5>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Trang trước</button>
          </li>
          <li className="page-item">
            <button className="page-link">{currentPage}</button>
          </li>
          <li className={`page-item ${currentRestaurants.length < PAGE_SIZE ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Trang sau</button>
          </li>
        </ul>
      </nav>
      <div className="row">
        {currentRestaurants.map((rtr, index) => (
          <div className="col-6 mb-4 " key={index} style={{height : '30rem'}}>
            <div className="card h-100 m-">
              <img
                className="card-img-top"
                src={rtr.thumbnail}
                alt={rtr.restaurantName}
                style={{ height: '12rem', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{rtr.restaurantName}</h5>
                <p className="card-text">{rtr.restaurantDes}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Đánh giá: {rtr.restaurantRate}</li>
                <li className="list-group-item">Địa điểm: {rtr.restaurantLocation}</li>
              </ul>
              <div className="card-body">
                <button className="btn btn-outline-danger">
                  Xóa
                </button>
                <Link to={`/restaurant/${index}`} className="btn btn-outline-info ms-2">
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
}

export default EtpRestaurantList;
