import { useState } from "react";
import { useParams } from "react-router-dom";

function EtpHotelDetail() {
    let { hId } = useParams();

    const [hotelDetail, setHotelDetail] = useState({
        id: hId,
        name: "Khách sạn A",
        address: "123 Đường XYZ, Quận ABC, Thành phố XYZ",
        rating: 4.5,
        description: "Khách sạn sang trọng với đầy đủ tiện nghi.",
        image: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600",
        rooms: [
            {
                roomId: 'r001',
                roomName: 'Phòng 1',
                booked: false
            },
            {
                roomId: 'r002',
                roomName: 'Phòng 2',
                booked: true
            },
            {
                roomId: 'r003',
                roomName: 'Phòng 3',
                booked: false
            },
            {
                roomId: 'r004',
                roomName: 'Phòng 4',
                booked: true
            },
            {
                roomId: 'r005',
                roomName: 'Phòng 5',
                booked: false
            },  {
                roomId: 'r006',
                roomName: 'Phòng 6',
                booked: false
            },
            {
                roomId: 'r007',
                roomName: 'Phòng 7',
                booked: true
            },
            {
                roomId: 'r008',
                roomName: 'Phòng 8',
                booked: true
            },
            {
                roomId: 'r009',
                roomName: 'Phòng 9',
                booked: true
            },
            {
                roomId: 'r010',
                roomName: 'Phòng 10',
                booked: false
            }
        ]
    });

    

    return (
        <div className="container">
            <h5>Chi tiết khách sạn : {hId}</h5>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <img src={hotelDetail.image} alt="Hotel Thumbnail" className="img-fluid" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tên khách sạn:</label>
                        <p>{hotelDetail.name}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Địa chỉ:</label>
                        <p>{hotelDetail.address}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Đánh giá:</label>
                        <p>{hotelDetail.rating}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mô tả:</label>
                        <p>{hotelDetail.description}</p>
                    </div>
                </div>

                <div className="col-6">
                    <h5>Danh sách phòng</h5>
                    <div className="room-container row g-3">
                        {hotelDetail.rooms.map((room) => (
                            <div className={`room-item text-center col-4 ${room.booked ? 'isBooked' : ''}`} key={room.roomId}>
                                {room.booked ? <>
                                    <i className="ti ti-door-off room-icon"></i>
                                    <span className="">Đã đặt</span>     
                                </>
                                : <>
                                      <i className="ti ti-door room-icon"></i>
                                      <span className="room-name">{room.roomName}</span>
                                </>}
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EtpHotelDetail;
