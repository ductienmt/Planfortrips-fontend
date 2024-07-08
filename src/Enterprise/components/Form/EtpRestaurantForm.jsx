  import React, { useEffect, useState } from "react";
  import { GetAllDistrictByProvinceId, GetAllProvinces, GetAllWardByDistTrictId } from "../../../Api/Api3rd/VnLocationApi";
  import {DNA} from 'react-loader-spinner'
  function EtpRestaurantForm() {
    const [loader, setLoader] = useState(false)
    const [restaurant, setRestaurant] = useState({
      restaurantName: '',
      restaurantDes: '',
      restaurantType: '',
      thumbnail: '',
      averagePrice: 0,
      rating: 0
    });

    const [province, setProvince] = useState([]);
    const [provinceId, setProvinceId] = useState('');

    const [district, setDistrict] = useState([]);
    const [districtId, setDistrictId] = useState('');

    const [ward, setWard] = useState([]);

    const [restaurantTypes] = useState([
      { restaurantTypeId: 1, restaurantTypeName: 'Nhà hàng' },
      { restaurantTypeId: 2, restaurantTypeName: 'Quán ăn' },
      { restaurantTypeId: 3, restaurantTypeName: 'Tiệm cà phê' }
    ]);

    useEffect(() => {
      setLoader(true)
      GetAllProvinces().then((res) => setProvince(res.results)).then(() => {
        setLoader(false)
      });
    }, []);

    useEffect(() => {
      if (provinceId) {
      setLoader(true)
        GetAllDistrictByProvinceId(provinceId).then((res) => setDistrict(res.results)).then(() => {
          setLoader(false)
        });
        setDistrict([]);
        setWard([]);
      }
    }, [provinceId]);

    useEffect(() => {
      if (districtId) {
      setLoader(true)
        GetAllWardByDistTrictId(districtId).then((res) => setWard(res.results)).then(() => {
          setLoader(false)
        })
      }
    },[districtId])

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setRestaurant({
        ...restaurant,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };

    return (
      <>
      {loader && <div className="loader position-absolute w-100 h-100 d-flex">
        <div className="m-auto">
        <DNA/>
        </div>
      </div>}   
        <h5 className="card-title fw-semibold mb-4">Thêm quán ăn</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="restaurantName" className="form-label">
              Tên quán ăn
            </label>
            <input
              type="text"
              className="form-control"
              id="restaurantName"
              name="restaurantName"
              value={restaurant.restaurantName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="restaurantDes" className="form-label">
              Mô tả
            </label>
            <textarea
              className="form-control"
              id="restaurantDes"
              name="restaurantDes"
              value={restaurant.restaurantDes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Địa điểm</label>
            <div className="d-flex">
              <div className="province me-2">
                <select
                  className="form-control"
                  id="province"
                  value={provinceId}
                  onChange={(e) => setProvinceId(e.target.value)}
                >
                  <option value="">Chưa chọn Tỉnh / Thành Phố</option>
                  {province.map((pv) => (
                    <option 
                    key={pv.province_id} value={pv.province_id}>{pv.province_name}</option>
                  ))}
                </select>
              </div>

              <div className="district me-2">
                <select
                  className="form-control"
                  id="district"
                  value={restaurant.district}
                  onChange={(e) => setDistrictId(e.target.value)}
                >
                  <option value="">Chưa chọn Quận / Huyện</option>
                  {district.map((dt) => (
                    <option key={dt.district_id} value={dt.district_id}>{dt.district_name}</option>
                  ))}
                </select>
              </div>

              <div className="ward me-2">
                <select
                  className="form-control"
                  id="ward"
                  value={restaurant.warId}
                  onChange={handleInputChange}
                >
                  <option value="">Chưa chọn Phường / Xã</option>
                  {ward.map((wd) => {
                    return (
                        <option value={wd.ward_id}>{wd.ward_name}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="restaurantType" className="form-label">
              Loại quán ăn
            </label>
            <select
              className="form-control"
              id="restaurantType"
              name="restaurantType"
              value={restaurant.restaurantType}
              onChange={handleInputChange}
            >
              <option value="">Chọn loại quán ăn</option>
              {restaurantTypes.map((rt) => (
                <option key={rt.restaurantTypeId} value={rt.restaurantTypeId}>
                  {rt.restaurantTypeName}
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
              value={restaurant.thumbnail}
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
              value={restaurant.averagePrice}
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
              value={restaurant.rating}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Thêm quán ăn
          </button>
        </form>
      </>
    );
  }

  export default EtpRestaurantForm;
