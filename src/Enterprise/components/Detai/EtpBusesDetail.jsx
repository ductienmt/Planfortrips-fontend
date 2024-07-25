import { BiLogoGoLang } from "react-icons/bi";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";

function EtpBusesDetail() {
    const buses = {
        planeName: 'B52',
        form: 'Sai Gon',
        formTime: '02/10/2024 : 08:00:00',
        to: 'Binh Thuan',
        toTime: '02/10/2024 : 15:00:00',
        priceCommon: 1500,
        slotCommon: 25,
        priceVIP: 8000,
        slotVIP: 15
    };

    const { busesId } = useParams();

    const [seatCommon, setSeatCommon] = useState([
        { seatId: 'st001', status: true },
        { seatId: 'st002', status: false },
        { seatId: 'st003', status: false },
        { seatId: 'st004', status: true },
        { seatId: 'st005', status: false },
        { seatId: 'st006', status: false },
        { seatId: 'st007', status: false }
    ]);

    const [seatVIP, setSeatVIP] = useState([
        { seatID: 'stV001', status: false },
        { seatID: 'stV002', status: false },
        { seatID: 'stV003', status: false },
        { seatID: 'stV004', status: false },
        { seatID: 'stV005', status: false },
        { seatID: 'stV006', status: false }
    ]);

    const toggleSeat = (type, id) => {
        if (type === 'Common') {
            setSeatCommon(prev => 
                prev.map(seat => 
                    seat.seatId === id ? { ...seat, status: !seat.status } : seat
                )
            );
        } else {
            setSeatVIP(prev => 
                prev.map(seat => 
                    seat.seatID === id ? { ...seat, status: !seat.status } : seat
                )
            );
        }
    };

    return (
        <>
            <div className="text-center mb-4">
                <label htmlFor="" className="class-label border p-2 rounded border-dark fs-4 fw-bold text-info">
                    ID: {busesId}
                </label>
            </div>

            <div className="location-buses row justify-content-around mb-4">
                <div className="location-buses_form col-12 col-md-3 mb-3">
                    <label htmlFor="" className="form-label">Điểm bắt đầu</label>
                    <input type="text" className="form-control text-uppercase bg-info text-white fw-bold" value={buses.form} readOnly disabled />
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-around text-center col-12 col-md-6 mb-3">
                    <div className="location-buses_form-time col mb-3 mb-md-0">
                        <input type="text" value={buses.formTime} className="form-control" readOnly disabled />
                    </div>

                    <div className="mx-4 d-flex align-items-center justify-content-center">
                        <BiLogoGoLang fontSize={'50px'} />
                    </div>

                    <div className="location-buses_to-time col">
                        <input type="text" value={buses.toTime} className="form-control" readOnly disabled />
                    </div>
                </div>

                <div className="location-buses_to col-12 col-md-3 mb-3">
                    <label htmlFor="" className="form-label">Điểm đến</label>
                    <input type="text" className="form-control bg-success text-uppercase text-white fw-bold" value={buses.to} readOnly disabled />
                </div>
            </div>

            <div className="info">
                <div className="form-group mb-4">
                    <label htmlFor="" className="form-label">Máy bay</label>
                    <input type="text" className="form-control" value={buses.planeName} disabled readOnly />
                </div>

                <div className="form-group mb-4">
                    <div className="row mb-3">
                        <div className="col-12 col-md-3 d-flex align-items-center">
                            <span className="fs-5 fw-bold text-primary">Hạng phổ thông</span>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <label htmlFor="" className="form-label">Giá vé</label>
                            <input type="text" className="form-control" value={buses.priceCommon} disabled readOnly />
                        </div>
                        <div className="col-12 col-md-4">
                            <label htmlFor="" className="form-label">Số lượng</label>
                            <input type="text" className="form-control" value={buses.slotCommon} disabled readOnly />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3 d-flex align-items-center">
                            <span className="fs-5 fw-bold text-primary">Hạng thương gia</span>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <label htmlFor="" className="form-label">Giá vé</label>
                            <input type="text" className="form-control" value={buses.priceVIP} disabled readOnly />
                        </div>
                        <div className="col-12 col-md-4">
                            <label htmlFor="" className="form-label">Số lượng</label>
                            <input type="text" className="form-control" value={buses.slotVIP} disabled readOnly />
                        </div>
                    </div>
                </div>
            </div>

            <div className="seats">
                <h4 className="text-center mb-4">Danh sách ghế</h4>
                <div className="row g-5">

                    <div className="col-12 col-md-6">
                        <label htmlFor="" className="form-label">Phổ thông</label>
                        <div className="row g-3">
                            {seatCommon.map((s, index) => (
                                <div className="col-6 col-md-4" key={index}>
                                    <div className={`card_plane ${s.status ? 'card-booked-common' : 'card-available-common'}`}>
                                        <div className="card-header fs-4 fw-bold text-uppercase">
                                            {s.seatId}
                                        </div>
                                        <div className="p-2 text-center">
                                            {s.status 
                                                ? <button className="btn btn-outline-danger" onClick={() => toggleSeat('Common', s.seatId)}>Hủy vé</button>
                                                : <button className="btn btn-outline-primary" onClick={() => toggleSeat('Common', s.seatId)}>Đặt mua</button>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="" className="form-label">Thương gia</label>
                        <div className="row g-3">
                            {seatVIP.map((s, index) => (
                                <div className="col-6 col-md-4" key={index}>
                                    <div className={`card_plane ${s.status ? 'card-booked-vip' : 'card-available-vip'}`}>
                                        <div className="card-header fw-bold">
                                            {s.seatID}
                                        </div>
                                        <div className="card-body text-center">
                                            {s.status 
                                                ? <button className="btn btn-outline-danger" onClick={() => toggleSeat('VIP', s.seatID)}>Hủy vé</button>
                                                : <button className="btn btn-outline-primary" onClick={() => toggleSeat('VIP', s.seatID)}>Đặt mua</button>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EtpBusesDetail;
