import React, { useEffect, useState } from "react";
import { GetAllProvinces } from "../../../Api/Api3rd/VnLocationApi";

function VehicleForm() {

<<<<<<< HEAD


  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    GetAllProvinces().then((res) => setProvinces(res.results))
  }, [])


=======
  useEffect(() => {
  }, [])

>>>>>>> master
  const vehicleType = [
    {
      vehicleTypeId: '1',
      vehilleTypeName: 'Xe 7 chỗ'
    },
    {
      vehicleTypeId: '2',
      vehilleTypeName: 'Xe 15 chỗ'
    },
    {
      vehicleTypeId: '3',
      vehilleTypeName: 'Xe 36 chỗ'
    },
    {
      vehicleTypeId: '4',
      vehilleTypeName: 'Máy bay'
    }
  ]

  const [vehicle, setVehicle] = useState({
    vehicleId: '',
    vehicleName: '',
    vehicleDes: '',
    vehicleType: '',
    thumbnail: '',
    priceTicket: 0,
    contactID: '', // Id user
    form: '', // Chạy từ 
    to: '', // Đến (Tuyến xe),
    manufacturer: '',
    model: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle({
      ...vehicle,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(vehicle);
    // Reset form fields if needed
    setVehicle({
      vehicleId: '',
      vehicleName: '',
      vehicleDes: '',
      vehicleType: '',
      thumbnail: '',
      priceTicket: 0,
      contactID: '',
      form: '',
      to: '',
      manufacturer: '',
      model: ''
    });
  };

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-semibold mb-4">Thêm phương tiện</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="vehicleName" className="form-label">
                Tên xe
              </label>
              <input
                type="text"
                className="form-control"
                id="vehicleName"
                name="vehicleName"
                value={vehicle.vehicleName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vehicleDes" className="form-label">
                Mô tả
              </label>
              <textarea
                className="form-control"
                id="vehicleDes"
                name="vehicleDes"
                value={vehicle.vehicleDes}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="vehicleType" className="form-label">
                Loại phương tiện
              </label>
              <select className="form-control" onChange={handleInputChange}>
                {vehicleType.map((vt) => (
                  <option key={vt.vehicleTypeId} value={vt.vehicleTypeId}>
                    {vt.vehilleTypeName}
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
                value={vehicle.thumbnail}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priceTicket" className="form-label">
                Giá vé/thuê
              </label>
              <input
                type="number"
                className="form-control"
                id="priceTicket"
                name="priceTicket"
                value={vehicle.priceTicket}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
<<<<<<< HEAD
            <div className="col-6">
    <label htmlFor="form" className="form-label">
      Chạy từ <span className="text-danger">(Điểm bắt đầu)</span>
    </label>
    <select
      name="form"
      className="form-control"
      value={vehicle.form}
      onChange={handleInputChange}
    >
      <option value="">Chọn điểm bắt đầu</option>
      {provinces.map((p) => (
        <option key={p.province_id} value={p.province_id}>
          {p.province_name}
        </option>
      ))}
    </select>
  </div>
  <div className="col-6">
    <label htmlFor="to" className="form-label">
      Đến <span className="text-danger">(Điểm kết thúc)</span>
    </label>
    <select
      name="to"
      className="form-control"
      value={vehicle.to}
      onChange={handleInputChange}
    >
      <option value="">Chọn điểm kết thúc</option>
      {provinces
        .filter((p) => p.province_id < vehicle.form)
        .map((p) => (
          <option key={p.province_id} value={p.province_name}>
            {p.province_name}
          </option>
        ))}
    </select>
  </div>
=======
              <div className="col-6">
                <label htmlFor="form" className="form-label">
                  Chạy từ <span className="text-danger">(Điểm bắt đầu)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form"
                  name="form"
                  value={vehicle.form}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="to" className="form-label">
                  Đến <span className="text-danger">(Điểm kết thúc)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to"
                  name="to"
                  value={vehicle.to}
                  onChange={handleInputChange}
                />
              </div>
>>>>>>> master
            </div>
            <div className="mb-3">
              <label htmlFor="manufacturer" className="form-label">
                Hãng sản xuất
              </label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                name="manufacturer"
                value={vehicle.manufacturer}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="model" className="form-label">
                Mẫu xe
              </label>
              <input
                type="text"
                className="form-control"
                id="model"
                name="model"
                value={vehicle.model}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Thêm phương tiện
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VehicleForm;
