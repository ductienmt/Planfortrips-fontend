import React, { useEffect, useState } from 'react';
import { GetAllDistrictByProvinceId, GetAllProvinces, GetAllWardByDistTrictId } from '../../../../Api/Api3rd/VnLocationApi';

function EtpBusesForm_Car() {

    const [provinces, setProvinces] = useState([]);
    const [province_id, setProvince_id] = useState('');

    const [districts, setDistricts] = useState([]);
    const [district_id, setDistrict_id] = useState('');

    const [wards, setWards] = useState([]);
    const [ward_id, setWard_id] = useState('');

    useEffect(() => {
        GetAllProvinces().then((res) => setProvinces(res.results));
    }, []);

    useEffect(() => {
        if (province_id) {
            GetAllDistrictByProvinceId(province_id).then((res) => setDistricts(res.results));
        } else {
            setDistricts([]);
            setDistrict_id('');
            setWards([]);
            setWard_id('');
        }
    }, [province_id]);

    useEffect(() => {
        if (district_id) {
            GetAllWardByDistTrictId(district_id).then((res) => setWards(res.results));
        } else {
            setWards([]);
            setWard_id('');
        }
    }, [district_id]);

    const carAvailble = [
        {
            carId: 'pt001',
            carName: 'Mercedes-Benz Citaro',
            carSlot: 15,
            licensePlates: '86B1-13-11'
        },
        {
            carId: 'pt002',
            carName: 'Volvo 9700',
            carSlot: 20,
            licensePlates: '86B1-02-10'
        },
        {
            carId: 'pt003',
            carName: 'King Long XMQ6129Y',
            carSlot: 30,
            licensePlates: '86B1-02-01'
        },
        {
            carId: 'pt004',
            carName: 'Ford Transit Limousine',
            carSlot: 45,
            licensePlates: '86B1-82-91'
        }
    ];

    const typeVehicle = [
        {
            typeId: 'tv001',
            typeName: 'Phổ thông'
        },
        {
            typeId: 'tv002',
            typeName: 'Thương gia'
        }
    ];

    const [buses, setBuses] = useState({
        carId: '',
        carName: '',
        carSlot: '',
        licensePlates: '',
        timeDeparture: '',
        timeArrival: '',
        vehicleType: '',
        ticketPrice: '',
        departureLocation: '',
        departureAddress: '',
        destinationLocation: '',
        destinationAddress: ''
    });

    const handleCarChange = (e) => {
        const selectedCarId = e.target.value;
        const selectedCar = carAvailble.find(car => car.carId === selectedCarId);
        setBuses(selectedCar || {
            carId: '',
            carName: '',
            carSlot: '',
            licensePlates: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuses(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <h5>Thêm tuyến xe</h5>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Chọn Xe</label>
                <select
                    name="carId"
                    className="form-control"
                    defaultValue={''}
                    onChange={handleCarChange}
                >
                    <option value="" disabled>Danh sách xe có sẵn</option>
                    {carAvailble.map((cA) => (
                        <option key={cA.carId} value={cA.carId}>{cA.carName}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className='form-label'>Biển số xe</label>
                        <input type="text" className="form-control" name="licensePlates" value={buses.licensePlates} onChange={handleInputChange} disabled readOnly/>
                    </div>

                    <div className="col-6">
                        <label htmlFor="" className="form-label">ID xe</label>
                        <input type="text" className='form-control' readOnly disabled value={buses.carId} />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Tên xe</label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            disabled
                            value={buses.carName}
                        />
                    </div>

                    <div className="col-6">
                        <label htmlFor="" className="form-label">Số ghế</label>
                        <input
                            type="number"
                            className="form-control"
                            readOnly
                            disabled
                            value={buses.carSlot}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Loại xe</label>
                        <select name="vehicleType" className='form-control' onChange={handleInputChange}>
                            {typeVehicle.map((tV) => (
                                <option key={tV.typeId} value={tV.typeId}>{tV.typeName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-6">
                        <label htmlFor="" className="form-label">Giá vé</label>
                        <input type="number" className='form-control' name="ticketPrice" value={buses.ticketPrice} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Thời gian khởi hành</label>
                        <input type="datetime-local" className="form-control" name="timeDeparture" value={buses.timeDeparture} onChange={handleInputChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="" className="form-label">Đến trạm vào lúc</label>
                        <input type="datetime-local" className="form-control" name="timeArrival" value={buses.timeArrival} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="" className='form-label text-primary'>Địa điểm khởi hành</label>
                <div className="departure d-flex">
                    <div className="province me-2">
                        <select
                            name="provinceDeparture"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setProvince_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn tỉnh</option>
                            {provinces.map((pv) => (
                                <option key={pv.province_id} value={pv.province_id}>{pv.province_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="district me-2">
                        <select
                            name="districtDeparture"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setDistrict_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn huyện</option>
                            {districts.map((dt) => (
                                <option key={dt.district_id} value={dt.district_id}>{dt.district_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="ward">
                        <select
                            name="wardDeparture"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setWard_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn xã</option>
                            {wards.map((wd) => (
                                <option key={wd.ward_id} value={wd.ward_id}>{wd.ward_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Địa chỉ cụ thể</label>
                <input type="text" className="form-control" name="departureAddress" value={buses.departureAddress} onChange={handleInputChange} placeholder='Địa chỉ cụ thể cho Điểm khởi hành gồm (tỉnh, huyện, xã, đường,..)' />
            </div>

            <div className="mb-3">
                <label htmlFor="" className='form-label text-danger'>Trạm kết thúc</label>
                <div className="departure d-flex">
                    <div className="province me-2">
                        <select
                            name="provinceDestination"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setProvince_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn tỉnh</option>
                            {provinces.map((pv) => (
                                <option key={pv.province_id} value={pv.province_id}>{pv.province_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="district me-2">
                        <select
                            name="districtDestination"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setDistrict_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn huyện</option>
                            {districts.map((dt) => (
                                <option key={dt.district_id} value={dt.district_id}>{dt.district_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="ward">
                        <select
                            name="wardDestination"
                            className='form-control'
                            defaultValue={''}
                            onChange={(e) => setWard_id(e.target.value)}
                        >
                            <option value="" disabled>Chọn xã</option>
                            {wards.map((wd) => (
                                <option key={wd.ward_id} value={wd.ward_id}>{wd.ward_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Địa chỉ cụ thể</label>
                <input type="text" className="form-control" name="destinationAddress" value={buses.destinationAddress} onChange={handleInputChange} placeholder='Địa chỉ cụ thể cho Trạm kết thúc gồm (tỉnh, huyện, xã, đường,..)' />
            </div>

            <button className='btn btn-danger'>Thêm tuyến</button>

        </>
    );
}

export default EtpBusesForm_Car;
