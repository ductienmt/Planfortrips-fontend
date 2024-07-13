import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EtpVehicleDetail() {
    let { carId } = useParams();

    const [vehicles] = useState([
        {
            vehicleId: 'vh001',
            VehicleName: 'Toyota Camry',
            VehicleType: 'Sedan',
            VehiclePrice: '$30,000',
            VehicleFrom: 'Ho Chi Minh City',
            VehicleTo: 'Hanoi',
            Description: 'Xe sedan gia đình phổ biến với nội thất rộng rãi và tiện nghi.',
            rooms: [
                { roomId: 'r001', roomName: 'Ghế 1', booked: false },
                { roomId: 'r002', roomName: 'Ghế 2', booked: true },
                { roomId: 'r003', roomName: 'Ghế 3', booked: false },
            ]
        },
        {
            vehicleId: 'vh002',
            VehicleName: 'Honda CR-V',
            VehicleType: 'SUV',
            VehiclePrice: '$35,000',
            VehicleFrom: 'Danang',
            VehicleTo: 'Nha Trang',
            Description: 'Xe SUV bán chạy với khả năng vận hành mạnh mẽ và tiện nghi cao.',
            rooms: [
                { roomId: 'r004', roomName: 'Ghế 1', booked: true },
                { roomId: 'r005', roomName: 'Ghế 2', booked: false }
            ]
        },
        {
            vehicleId: 'vh003',
            VehicleName: 'Tesla Model S',
            VehicleType: 'Electric',
            VehiclePrice: '$80,000',
            VehicleFrom: 'Hanoi',
            VehicleTo: 'Phu Quoc',
            Description: 'Xe điện siêu sang với khả năng vận hành xa và tính năng an toàn cao.',
            rooms: [
                { roomId: 'r006', roomName: 'Ghế 1', booked: false },
                { roomId: 'r007', roomName: 'Ghế 2', booked: false }
            ]
        },
        {
            vehicleId: 'vh004',
            VehicleName: 'Mazda CX-5',
            VehicleType: 'SUV',
            VehiclePrice: '$40,000',
            VehicleFrom: 'Hanoi',
            VehicleTo: 'Da Lat',
            Description: 'Xe SUV đa dụng với thiết kế thể thao và nội thất tiện nghi.',
            rooms: [
                { roomId: 'r008', roomName: 'Ghế 1', booked: true }
            ]
        },
        {
            vehicleId: 'vh005',
            VehicleName: 'Hyundai Sonata Hybrid',
            VehicleType: 'Hybrid',
            VehiclePrice: '$50,000',
            VehicleFrom: 'Ho Chi Minh City',
            VehicleTo: 'Hue',
            Description: 'Xe hybrid tiết kiệm nhiên liệu với nội thất cao cấp và tính năng an toàn.',
            rooms: [
                { roomId: 'r009', roomName: 'Ghế 1', booked: true },
                { roomId: 'r010', roomName: 'Ghế 2', booked: false }
            ]
        },
        {
            vehicleId: 'vh006',
            VehicleName: 'Ford Ranger',
            VehicleType: 'Pickup Truck',
            VehiclePrice: '$45,000',
            VehicleFrom: 'Can Tho',
            VehicleTo: 'Vung Tau',
            Description: 'Xe bán tải mạnh mẽ và đa dụng, phù hợp với mọi địa hình.',
            rooms: [
                { roomId: 'r011', roomName: 'Ghế 1', booked: false }
            ]
        }
    ]);

    const vehicleDetail = vehicles.find(vehicle => vehicle.vehicleId === carId);

    if (!vehicleDetail) {
        return <p>Không tìm thấy thông tin cho xe này.</p>;
    }

    return (
        <div className="container">
            <h5>Chi tiết xe : {vehicleDetail.VehicleName}</h5>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <img src="https://via.placeholder.com/600" alt="Vehicle Thumbnail" className="img-fluid" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tên xe:</label>
                        <p>{vehicleDetail.VehicleName}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Loại phương tiện:</label>
                        <p>{vehicleDetail.VehicleType}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Giá vé:</label>
                        <p>{vehicleDetail.VehiclePrice}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Khởi đầu từ:</label>
                        <p>{vehicleDetail.VehicleFrom}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Điểm đến:</label>
                        <p>{vehicleDetail.VehicleTo}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mô tả:</label>
                        <p>{vehicleDetail.Description}</p>
                    </div>
                </div>

                <div className="col-6">
                    <h5>Danh sách Ghế</h5>
                    <div className="room-container row g-3">
                        {vehicleDetail.rooms.map((room) => (
                            <div className={`room-item text-center col-4 ${room.booked ? 'isBooked' : ''}`} key={room.roomId}>
                                {room.booked ? (
                                    <>
                                        <i className="ti ti-door-off room-icon"></i>
                                        <span className="">Đã đặt</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="ti ti-door room-icon"></i>
                                        <span className="room-name">{room.roomName}</span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EtpVehicleDetail;
