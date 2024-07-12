import { useEffect, useState } from "react";
import { GetAllProvinces, GetAllDistrictByProvinceId, GetAllWardByDistTrictId } from "../../../Api/Api3rd/VnLocationApi";

function EtpRestaurantForm() {

   
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

    return (
        <>
            <div className="mb-3">
                <label htmlFor="restaurantName" className="form-label">Tên quán ăn</label>
                <input type="text" className="form-control" id="restaurantName" />
            </div>

            <div className="mb-3">
                <label htmlFor="restaurantDes" className="form-label">Mô tả quán ăn</label>
                <input type="text" className="form-control" id="restaurantDes" />
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
                <label htmlFor="" className="form-label">Ảnh quán ăn</label>
                <input type="file" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Loại ẩm thực</label>
                <select name="" id="" defaultValue={''} className="form-control">
                    <option value="" disabled>Chọn hương vị quốc gia</option>
                    {cuisineType.map((cT) => {
                        return (
                            <option value={cT.cuisineTypeId}>{cT.cuisineTypeName}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                    <label htmlFor="" className="form-label">Giờ mở cửa</label>
                    <input type="datetime-local" className="form-control" />
                    </div>
                    <div className="col-6">
                    <label htmlFor="" className="form-label">Giờ đóng cửa</label>
                    <input type="datetime-local" className="form-control" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EtpRestaurantForm;
