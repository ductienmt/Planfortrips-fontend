import React from 'react';

function EtpBusesList() {
    const buses = [
        {
            busesID: 'bs001',
            busesForm: 'Ho Chi Minh',
            busesTo: 'Ha Noi',
            airportForm: 'Tan Son Nhat',
            airportTo: 'Noi Bai',
            departureTime: '08:00',
            arrivalTime: '12:00'
        },
        {
            busesID: 'bs002',
            busesForm: 'Da Nang',
            busesTo: 'Hue',
            airportForm: 'Da Nang International Airport',
            airportTo: 'Phu Bai International Airport',
            departureTime: '09:30',
            arrivalTime: '11:00'
        },
        {
            busesID: 'bs003',
            busesForm: 'Can Tho',
            busesTo: 'Rach Gia',
            airportForm: 'Can Tho International Airport',
            airportTo: 'Rach Gia Airport',
            departureTime: '07:45',
            arrivalTime: '10:30'
        },
        {
            busesID: 'bs004',
            busesForm: 'Nha Trang',
            busesTo: 'Dalat',
            airportForm: 'Cam Ranh International Airport',
            airportTo: 'Lien Khuong Airport',
            departureTime: '10:15',
            arrivalTime: '13:00'
        },
        {
            busesID: 'bs005',
            busesForm: 'Vung Tau',
            busesTo: 'Phan Thiet',
            airportForm: 'Vung Tau Airport',
            airportTo: 'Phan Thiet Airport',
            departureTime: '11:30',
            arrivalTime: '14:00'
        },
        {
            busesID: 'bs006',
            busesForm: 'Quy Nhon',
            busesTo: 'Pleiku',
            airportForm: 'Phu Cat Airport',
            airportTo: 'Pleiku Airport',
            departureTime: '13:45',
            arrivalTime: '16:30'
        },
        {
            busesID: 'bs007',
            busesForm: 'Hai Phong',
            busesTo: 'Quang Ninh',
            airportForm: 'Cat Bi International Airport',
            airportTo: 'Van Don International Airport',
            departureTime: '14:00',
            arrivalTime: '16:45'
        },
        {
            busesID: 'bs008',
            busesForm: 'Ca Mau',
            busesTo: 'Bac Lieu',
            airportForm: 'Ca Mau Airport',
            airportTo: 'Bac Lieu Airport',
            departureTime: '16:20',
            arrivalTime: '18:30'
        },
        {
            busesID: 'bs009',
            busesForm: 'Long Xuyen',
            busesTo: 'Chau Doc',
            airportForm: 'Can Tho International Airport',
            airportTo: 'Chau Doc Airport',
            departureTime: '17:00',
            arrivalTime: '19:30'
        },
        {
            busesID: 'bs010',
            busesForm: 'Tam Ky',
            busesTo: 'Quang Ngai',
            airportForm: 'Chu Lai International Airport',
            airportTo: 'Quang Ngai Airport',
            departureTime: '18:45',
            arrivalTime: '21:00'
        }
    ];

    return (
        <>
            <h5 className="card-title">Danh sách tuyến</h5>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã số chuyến bay</th>
                        <th scope="col">Sân bay khởi hành</th>
                        <th scope="col">Trạm sân bay đáp</th>
                        <th scope="col">Từ</th>
                        <th scope="col">Đến</th>
                        <th scope="col">Giờ khởi hành</th>
                        <th scope="col">Giờ kết thúc</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus, index) => (
                        <tr key={bus.busesID}>
                            <td>{index + 1}</td>
                            <td>{bus.busesID}</td>
                            <td>{bus.airportForm}</td>
                            <td>{bus.airportTo}</td>
                            <td>{bus.busesForm}</td>
                            <td>{bus.busesTo}</td>
                            <td>{bus.departureTime}</td>
                            <td>{bus.arrivalTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EtpBusesList;
