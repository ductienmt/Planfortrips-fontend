import { useEffect, useState } from "react";
import { GetAllProvinces } from "../../Api/Api3rd/VnLocationApi";

function CreateResources() {
    const [provinceId, setProvinceId] = useState("");
    const [provinces, setProvinces] = useState([]);
    const [vehicle, setVehicle] = useState({
        vehicleName: '',
        vehiclePrice: '',
        vehicleType: '',
        routeTo: '',
        routeForm: '',
    });

    const vehicleType = [
        {
            id: 'vc1',
            name: 'Limouse'
        },
        {
            id: 'vc2',
            name: '9 chỗ'
        },
        {
            id: 'vc3',
            name: '16 chỗ'
        },
        {
            id: 'vc4',
            name: '24 chỗ'
        }
    ];

    useEffect(() => {
        GetAllProvinces().then((res) => {
            setProvinces(res.results);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicle(prevVehicle => ({
            ...prevVehicle,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(vehicle);
    };

    return (
        <>
            <h2>Thêm tài nguyên</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="vehicleName" className="form-label">Tên xe</label>
                        <input 
                            type="text" 
                            id="vehicleName" 
                            className="form-control" 
                            name="vehicleName" 
                            value={vehicle.vehicleName} 
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="route" className="form-label">Tuyến xe</label>
                        <div className="row">
                            <div className="form col-6">
                                <label htmlFor="routeForm">Từ</label>
                                <select 
                                    name="routeForm" 
                                    id="routeForm" 
                                    className="form-control" 
                                    onChange={handleChange}
                                    value={vehicle.routeForm}
                                >
                                    <option value="">Chọn tỉnh</option>
                                    {provinces.map((p) => (
                                        <option value={p.province_id} key={p.province_id}>
                                            {p.province_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="To col-6">
                                <label htmlFor="routeTo">Đến</label>
                                <select 
                                    name="routeTo" 
                                    id="routeTo" 
                                    className="form-control" 
                                    onChange={handleChange}
                                    value={vehicle.routeTo}
                                >
                                    <option value="">Chọn tỉnh</option>
                                    {provinces.map((p) => (
                                        <option value={p.province_id} key={p.province_id}>
                                            {p.province_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="vehicleType" className="form-label">Loại xe</label>
                        <select 
                            name="vehicleType" 
                            id="vehicleType" 
                            className="form-control" 
                            onChange={handleChange}
                            value={vehicle.vehicleType}
                        >
                            <option value="">Chọn loại xe</option>
                            {vehicleType.map((vh) => (
                                <option value={vh.id} key={vh.id}>{vh.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="vehiclePrice" className="form-label">Giá xe</label>
                        <input 
                            type="text" 
                            id="vehiclePrice" 
                            className="form-control" 
                            name="vehiclePrice" 
                            value={vehicle.vehiclePrice} 
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Thêm</button>
                </form>
            </div>
        </>
    );
}

export default CreateResources;
