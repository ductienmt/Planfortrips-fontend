import React, { useState } from "react";

function EtpVehicleForm_Plane() {
  const [plane, setPlane] = useState({
    planeId: '',
    planeName: '',
    planeDes: '',
    planeType: '',
    thumbnail: '',
    seatCountFirstClass: 0,
    seatCountBusinessClass: 0,
    seatCountEconomyClass: 0,
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [availableServices, setAvailableServices] = useState([
    {
      serviceId: '1',
      serviceName: 'Ăn uống'
    },
    {
      serviceId: '2',
      serviceName: 'Giải trí (TV)'
    },
    {
      serviceId: '3',
      serviceName: 'Nhà vệ sinh'
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlane({
      ...plane,
      [name]: value
    });
  };

  const handleAddService = (serviceName) => {
    const newSelectedService = availableServices.find(service => service.serviceName === serviceName);
    setSelectedServices([...selectedServices, newSelectedService]);
    setAvailableServices(availableServices.filter(service => service.serviceName !== serviceName));
  };

  const handleRemoveService = (serviceName) => {
    const removedService = selectedServices.find(service => service.serviceName === serviceName);
    setSelectedServices(selectedServices.filter(service => service.serviceName !== serviceName));
    setAvailableServices([...availableServices, removedService]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plane); // Log thông tin máy bay ra console để kiểm tra
    console.log(selectedServices); // Log danh sách dịch vụ đã chọn ra console để kiểm tra
    setPlane({
      planeId: '',
      planeName: '',
      planeDes: '',
      planeType: '',
      thumbnail: '',
      seatCountFirstClass: 0,
      seatCountBusinessClass: 0,
      seatCountEconomyClass: 0,
    });
    setSelectedServices([]);
    setAvailableServices([
      {
        serviceId: '1',
        serviceName: 'Ăn uống'
      },
      {
        serviceId: '2',
        serviceName: 'Giải trí (TV)'
      },
      {
        serviceId: '3',
        serviceName: 'Nhà vệ sinh'
      },
    ]);
  };

  return (
    <>
      <div className="vehicle-icon mb-3">
        <i className="ti ti-plane"></i>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="planeName" className="form-label">
            Tên máy bay
          </label>
          <input
            type="text"
            className="form-control"
            id="planeName"
            name="planeName"
            value={plane.planeName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="seatCountFirstClass" className="form-label">
            Số ghế hạng nhất
          </label>
          <input
            type="number"
            className="form-control"
            id="seatCountFirstClass"
            name="seatCountFirstClass"
            value={plane.seatCountFirstClass}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="seatCountBusinessClass" className="form-label">
            Số ghế hạng thương gia
          </label>
          <input
            type="number"
            className="form-control"
            id="seatCountBusinessClass"
            name="seatCountBusinessClass"
            value={plane.seatCountBusinessClass}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="seatCountEconomyClass" className="form-label">
            Số ghế hạng phổ thông
          </label>
          <input
            type="number"
            className="form-control"
            id="seatCountEconomyClass"
            name="seatCountEconomyClass"
            value={plane.seatCountEconomyClass}
            onChange={handleInputChange}
          />
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
            value={plane.thumbnail}
            onChange={handleInputChange}
          />
        </div>

        {/* Dịch vụ */}
        <div className="mb-3">
          <label htmlFor="carService" className="form-label">Dịch vụ chung</label>
          <select
            className="form-select"
            onChange={(e) => handleAddService(e.target.value)}
            value=""
          >
            <option value="">Chọn dịch vụ</option>
            {availableServices.map((service) => (
              <option key={service.serviceId} value={service.serviceName}>{service.serviceName}</option>
            ))}
          </select>
          <div className="service-container">
            {selectedServices.map((service, index) => (
              <div key={index} className="service-item">
                <span>{service.serviceName}</span>
                <button onClick={() => handleRemoveService(service.serviceName)}>X</button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Tạo mới
        </button>
      </form>
    </>
  );
}

export default EtpVehicleForm_Plane;
