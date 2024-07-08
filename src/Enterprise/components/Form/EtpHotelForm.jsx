import React, { useEffect, useState } from "react";
import { GetAllDistrictByProvinceId, GetAllProvinces, GetAllWardByDistTrictId } from "../../../Api/Api3rd/VnLocationApi";
import { DNA } from 'react-loader-spinner';

function EtpHotelForm() {
  const [loader, setLoader] = useState(false);
  const [hotel, setHotel] = useState({
    hotelName: '',
    hotelDes: '',
    hotelType: '',
    thumbnail: '',
    averagePrice: 0,
    rating: 0,
    provinceId: '',
    districtId: '',
    wardId: ''
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [hotelTypes] = useState([
    { hotelTypeId: 1, hotelTypeName: 'Khách sạn' },
    { hotelTypeId: 2, hotelTypeName: 'Resort' },
    { hotelTypeId: 3, hotelTypeName: 'Nhà nghỉ' }
  ]);

  useEffect(() => {
    setLoader(true);
    GetAllProvinces().then((res) => {
      setProvinces(res.results);
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    if (hotel.provinceId) {
      setLoader(true);
      GetAllDistrictByProvinceId(hotel.provinceId).then((res) => {
        setDistricts(res.results);
        setLoader(false);
      });
      setWards([]);
    }
  }, [hotel.provinceId]);

  useEffect(() => {
    if (hotel.districtId) {
      setLoader(true);
      GetAllWardByDistTrictId(hotel.districtId).then((res) => {
        setWards(res.results);
        setLoader(false);
      });
    }
  }, [hotel.districtId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({
      ...hotel,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      {loader && (
        <div className="loader position-absolute w-100 h-100 d-flex">
          <div className="m-auto">
            <DNA />
          </div>
        </div>
      )}
      <h5 className="card-title fw-semibold mb-4">Thêm khách sạn</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="hotelName" className="form-label">
            Tên khách sạn
          </label>
          <input
            type="text"
            className="form-control"
            id="hotelName"
            name="hotelName"
            value={hotel.hotelName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hotelDes" className="form-label">
            Mô tả
          </label>
          <textarea
            className="form-control"
            id="hotelDes"
            name="hotelDes"
            value={hotel.hotelDes}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Địa điểm</label>
          <div className="d-flex">
            <div className="province me-2">
              <select
                className="form-control"
                id="provinceId"
                value={hotel.provinceId}
                onChange={(e) => setHotel({ ...hotel, provinceId: e.target.value })}
              >
                <option value="">Chưa chọn Tỉnh / Thành Phố</option>
                {provinces.map((pv) => (
                  <option key={pv.province_id} value={pv.province_id}>{pv.province_name}</option>
                ))}
              </select>
            </div>

            <div className="district me-2">
              <select
                className="form-control"
                id="districtId"
                value={hotel.districtId}
                onChange={(e) => setHotel({ ...hotel, districtId: e.target.value })}
              >
                <option value="">Chưa chọn Quận / Huyện</option>
                {districts.map((dt) => (
                  <option key={dt.district_id} value={dt.district_id}>{dt.district_name}</option>
                ))}
              </select>
            </div>

            <div className="ward me-2">
              <select
                className="form-control"
                id="wardId"
                value={hotel.wardId}
                onChange={(e) => setHotel({ ...hotel, wardId: e.target.value })}
              >
                <option value="">Chưa chọn Phường / Xã</option>
                {wards.map((wd) => (
                  <option key={wd.ward_id} value={wd.ward_id}>{wd.ward_name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="hotelType" className="form-label">
            Loại khách sạn
          </label>
          <select
            className="form-control"
            id="hotelType"
            name="hotelType"
            value={hotel.hotelType}
            onChange={handleInputChange}
          >
            <option value="">Chọn loại khách sạn</option>
            {hotelTypes.map((ht) => (
              <option key={ht.hotelTypeId} value={ht.hotelTypeId}>
                {ht.hotelTypeName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh đại diện
          </label>
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            value={hotel.thumbnail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="averagePrice" className="form-label">
            Giá trung bình
          </label>
          <input
            type="number"
            className="form-control"
            id="averagePrice"
            name="averagePrice"
            value={hotel.averagePrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Đánh giá
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={hotel.rating}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Thêm khách sạn
        </button>
      </form>
    </>
  );
}

export default EtpHotelForm;
