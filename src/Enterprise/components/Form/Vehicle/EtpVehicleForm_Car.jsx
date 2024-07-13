import React, { useEffect, useState } from "react";
import { GetAllCarMakes, GetModelsByMakeName } from "../../../../Api/Api3rd/CarAppApi";

function EtpVehicleForm_Car() {
  const [makes, setMakes] = useState([]);
  const [filteredMakes, setFilteredMakes] = useState([]);
  const [models, setModels] = useState([]);

  const initialServiceAvailable = [
    {
      serviceId: '1',
      serviceName: 'Wifi'
    },
    {
      serviceId: '2',
      serviceName: 'Nhà vệ sinh'
    },
    {
      serviceId: '3',
      serviceName: 'Tivi'
    },
  ];

  const [serviceAvailable, setServiceAvailable] = useState(initialServiceAvailable);
  const [car, setCar] = useState({
    carId: '',
    carThumbnail: '',
    carMake: '',
    carModel: '',
    carSlot: '',
    licensePlates: '',
    licensePlatesImage: '',
    selectedServices: []
  });

  const handleCarMakeChange = (value) => {
    setCar({ ...car, carMake: value });
    if (value) {
      const filtered = makes.filter(make =>
        make.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMakes(filtered);
    } else {
      setFilteredMakes([]);
    }
  };

  const handleItemClick = (name) => {
    setCar({ ...car, carMake: name });
    setFilteredMakes([]);
  };

  const handleAddService = (serviceName) => {
    const selectedService = serviceAvailable.find(service => service.serviceName === serviceName);
    if (selectedService) {
      setCar({
        ...car,
        selectedServices: [...car.selectedServices, selectedService],
      });
      setServiceAvailable(prev => prev.filter(service => service.serviceName !== serviceName));
    }
  };

  const handleRemoveService = (serviceName) => {
    const removedService = car.selectedServices.find(service => service.serviceName === serviceName);
    if (removedService) {
      setCar({
        ...car,
        selectedServices: car.selectedServices.filter(service => service.serviceName !== serviceName),
      });
      setServiceAvailable(prev => [...prev, removedService]);
    }
  };

  useEffect(() => {
    GetAllCarMakes().then((res) => {
      setMakes(res.data);
    });
  }, []);

  useEffect(() => {
    if (car.carMake) {
      GetModelsByMakeName(car.carMake).then((res) => {
        setModels(res.data);
      });
    }
  }, [car.carMake]);

  return (
    <>
      <div className="vehicle-icon mb-3">
        <i className="ti ti-steering-wheel"></i>
      </div>

      {/* Hãng xe */}
      <div className="mb-3 search-input mt-2">
        <label htmlFor="carMake" className="form-label">Hãng xe</label>
        <input
          type="text"
          className="form-control"
          value={car.carMake}
          onChange={(e) => handleCarMakeChange(e.target.value)}
        />
        {filteredMakes.length > 0 && (
          <div className="result-container search-container">
            {filteredMakes.map((m) => (
              <div className="search-result-item" key={m.id} onClick={() => handleItemClick(m.name)}>
                <i className="ti ti-search"></i>
                <span>{m.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Model xe */}
      <div className="mb-3">
        <label htmlFor="carModel" className="form-label">Mẫu xe</label>
        <select
          className="form-select"
          value={car.carModel}
          onChange={(e) => setCar({ ...car, carModel: e.target.value })}
        >
          <option value="">Chọn mẫu xe</option>
          {models?.map((model) => (
            <option key={model.id} value={model.name}>{model.name}</option>
          ))}
        </select>
      </div>

      {/* Dịch vụ */}
      <div className="mb-3">
        <label htmlFor="carService" className="form-label">Dịch vụ</label>
        <select
            className="form-select"
            onChange={(e) => handleAddService(e.target.value)}
            value=""
          >
            <option value="">Chọn dịch vụ</option>
            {serviceAvailable.map((service) => (
              <option key={service.serviceId} value={service.serviceName}>{service.serviceName}</option>
            ))}
          </select>
        <div className="service-container">
          {car.selectedServices.map((service, index) => (
            <div key={index} className="service-item">
              <span>{service.serviceName}</span>
              <button onClick={() => handleRemoveService(service.serviceName)}>X</button>
            </div>
          ))}
        </div>
      </div>

      {/* Hình ảnh xe */}
      <div className="mb-3">
        <label htmlFor="carThumbnail" className="form-label">Hình ảnh xe</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setCar({ ...car, carThumbnail: e.target.files[0] })}
        />
      </div>

      {/* Số ghế */}
      <div className="mb-3">
        <label htmlFor="carSlot" className="form-label">Số ghế</label>
        <input
          type="number"
          className="form-control"
          value={car.carSlot}
          onChange={(e) => setCar({ ...car, carSlot: e.target.value })}
        />
      </div>

      {/* Biển số */}
      <div className="mb-3">
        <label htmlFor="licensePlates" className="form-label">Biển số xe</label>
        <input
          type="text"
          className="form-control"
          value={car.licensePlates}
          onChange={(e) => setCar({ ...car, licensePlates: e.target.value })}
        />
      </div>

      {/* Hình ảnh xác thực biển số */}
      <div className="mb-3">
        <label htmlFor="licensePlatesImage" className="form-label">Hình ảnh xác thực biển số xe</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setCar({ ...car, licensePlatesImage: e.target.files[0] })}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary">Tạo mới</button>
      </div>
    </>
  );
}

export default EtpVehicleForm_Car;
