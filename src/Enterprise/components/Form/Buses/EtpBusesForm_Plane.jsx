import React, { useState, useEffect } from 'react';

function EtpBusesForm_Plane() {
    const [flight, setFlight] = useState({
        flightId: '',
        airlineId: '',
        planeTypeId: '',
        departureTime: '',
        arrivalTime: '',
        departureAirport: '',
        arrivalAirport: '',
        departureLocation: '', // Thêm state để lưu địa điểm sân bay khởi hành
        arrivalLocation: '', // Thêm state để lưu địa điểm sân bay đến
        economyPrice: '',
        businessPrice: '',
        economySeats: '',
        businessSeats: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Kiểm tra nếu sân bay khởi hành và đến trùng nhau, không cho phép cập nhật
        if (name === 'departureAirport' && value === flight.arrivalAirport) {
            alert('Sân bay khởi hành và đến không được trùng nhau!');
            return;
        }

        if (name === 'arrivalAirport' && value === flight.departureAirport) {
            alert('Sân bay đến và khởi hành không được trùng nhau!');
            return;
        }

        setFlight(prevFlight => ({
            ...prevFlight,
            [name]: value
        }));
    };

    const airPorts = [
        {
            airPortId: 'ap001',
            airPortName: 'Sân bay Tân Sơn Nhất',
            locationId: 'lc001',
            location: 'Hồ Chí Minh' // Thêm địa điểm cho sân bay Tân Sơn Nhất
        },
        {
            airPortId: 'ap002',
            airPortName: 'Sân bay Nội Bài',
            locationId: 'lc001',
            location: 'Hà Nội' // Thêm địa điểm cho sân bay Nội Bài
        },
        {
            airPortId: 'ap003',
            airPortName: 'Sân bay Vinh',
            locationId: 'lc001',
            location: 'Vinh' // Thêm địa điểm cho sân bay Vinh
        },
    ];

    const planAvailbe = [
        {
            plansId : 'p001',
            planeName : 'Boeing 737'
        },
        {
            plansId : 'p002',
            planeName : 'Airbus 255'
        },
        {
            plansId : 'p001',
            planeName : 'Embraer 416'
        },
        
    ]

    useEffect(() => {
        // Tìm sân bay khởi hành trong danh sách airPorts
        const departureAirport = airPorts.find(airport => airport.airPortId === flight.departureAirport);
        if (departureAirport) {
            setFlight(prevFlight => ({
                ...prevFlight,
                departureLocation: departureAirport.location // Cập nhật địa điểm cho sân bay khởi hành
            }));
        }
    }, [flight.departureAirport]);

    useEffect(() => {
        // Tìm sân bay đến trong danh sách airPorts
        const arrivalAirport = airPorts.find(airport => airport.airPortId === flight.arrivalAirport);
        if (arrivalAirport) {
            setFlight(prevFlight => ({
                ...prevFlight,
                arrivalLocation: arrivalAirport.location // Cập nhật địa điểm cho sân bay đến
            }));
        }
    }, [flight.arrivalAirport]);

    return (
        <>
            <h5>Thêm tuyến máy bay</h5>

            <div className="mb-3">
                <label htmlFor="flightId" className="form-label">Chọn máy bay</label>
                <select name="" id="" className='form-control' defaultValue={''}>
                    <option value="">Danh sách máy bay có sẵn</option>
                    {planAvailbe.map((pA) => {
                        return (
                            <option value={pA.plansId}>{pA.planeName}</option>
                        )
                    })}
                </select>
            </div>


            <div className="mb-3">
                <label htmlFor="departureTime" className="form-label">Thời gian khởi hành</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    id="departureTime"
                    name="departureTime"
                    value={flight.departureTime}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="arrivalTime" className="form-label">Thời gian đến nơi</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    id="arrivalTime"
                    name="arrivalTime"
                    value={flight.arrivalTime}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
               <div className="row">
                <div className="col-6">
                <label htmlFor="departureAirport" className="form-label">Sân bay khởi hành</label>
                <select
                    className="form-control"
                    id="departureAirport"
                    name="departureAirport"
                    value={flight.departureAirport}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Chọn sân bay khởi hành</option>
                    {airPorts.map((airport) => (
                        <option key={airport.airPortId} value={airport.airPortId}>{airport.airPortName}</option>
                    ))}
                </select>
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Địa điểm</label>
                    <input type="text" className="form-control" value={flight.departureLocation} readOnly disabled/>
                </div>
               </div>
               
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                <label htmlFor="arrivalAirport" className="form-label">Sân bay đáp</label>
                <select
                    className="form-control"
                    id="arrivalAirport"
                    name="arrivalAirport"
                    value={flight.arrivalAirport}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Chọn sân bay đáp</option>
                    {airPorts.map((airport) => (
                        <option key={airport.airPortId} value={airport.airPortId}>{airport.airPortName}</option>
                    ))}
                </select>
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Địa điểm sân bay</label>
                    <input type="text" className="form-control" readOnly disabled value={flight.arrivalLocation}/>
                </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="economyPrice" className="form-label">Giá vé hạng phổ thông</label>
                        <input
                            type="number"
                            className="form-control"
                            id="economyPrice"
                            name="economyPrice"
                            value={flight.economyPrice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="businessPrice" className="form-label">Giá vé hạng VIP</label>
                        <input
                            type="number"
                            className="form-control"
                            id="businessPrice"
                            name="businessPrice"
                            value={flight.businessPrice}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="economySeats" className="form-label">Số ghế hạng phổ thông</label>
                        <input
                            type="number"
                            className="form-control"
                            id="economySeats"
                            name="economySeats"
                            value={flight.economySeats}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-6">
                        <label htmlFor="businessSeats" className="form-label">Số ghế hạng VIP</label>
                        <input
                            type="number"
                            className="form-control"
                            id="businessSeats"
                            name="businessSeats"
                            value={flight.businessSeats}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default EtpBusesForm_Plane;
