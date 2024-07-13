import React, { useEffect, useState } from "react";
import { GetAllProvinces, GetAllDistrictByProvinceId, GetAllWardByDistTrictId } from "../../../Api/Api3rd/VnLocationApi";

function EtpHotelForm() {

    const [provinces, setProvinces] = useState([]);
    const [province_id, setProvince_id] = useState('');

    const [districts, setDistricts] = useState([]);
    const [district_id, setDistrict_id] = useState('');

    const [wards, setWards] = useState([]);
    const [ward_id, setWard_id] = useState('');

    const cuisineType = [
        {
            cuisineTypeId : '1',
            cuisineTypeName : 'Việt Nam'
        },
        {
            cuisineTypeId : '2',
            cuisineTypeName : 'Hàn Quốc'
        },
        {
            cuisineTypeId : '3',
            cuisineTypeName : 'Trung Quốc'
        },
    ]


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

    const [hotelData, setHotelData] = useState({
        hotelName: "",
        description: "",
        location: "",
        starRating: 0,
        contactEmail: "",
        contactPhone: "",
        imageUrl: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHotelData({
            ...hotelData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Đưa dữ liệu khách sạn (hotelData) đi đâu đó, ví dụ: gửi lên server hoặc xử lý tiếp
        console.log(hotelData);
        // Sau khi xử lý xong, có thể làm sạch form
        setHotelData({
            hotelName: "",
            description: "",
            location: "",
            starRating: 0,
            contactEmail: "",
            contactPhone: "",
            imageUrl: ""
        });
    };

    return ( 
        <div className="container">
            <h3>Thêm khách sạn</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="hotelName" className="form-label">Tên khách sạn</label>
                    <input type="text" className="form-control" id="hotelName" name="hotelName" value={hotelData.hotelName} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Mô tả</label>
                    <textarea className="form-control" id="description" name="description" value={hotelData.description} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                <label htmlFor="" className='form-label text-primary'>Địa điểm quán ăn</label>
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
                <label htmlFor="" className="form-label text-primary">Địa điểm cụ thể</label>
                <input type="text" className="form-control" placeholder="Địa chỉ cụ thể bao gồm tỉnh, huyện, xã, tên đường hoặc ghi chú"/>
            </div>
              
                <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label">Email liên hệ</label>
                    <input type="email" className="form-control" id="contactEmail" name="contactEmail" value={hotelData.contactEmail} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactPhone" className="form-label">Số điện thoại liên hệ</label>
                    <input type="tel" className="form-control" id="contactPhone" name="contactPhone" value={hotelData.contactPhone} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Ảnh khách sạn</label>
                    <input type="file" className="form-control" id="imageUrl" name="imageUrl" value={hotelData.imageUrl} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        </div>
    );
}

export default EtpHotelForm;
