import { Link } from "react-router-dom";

function EtpVehicleList() {

    const vehicles = [
        {
          vehicleId : 'vh001',
          VehicleName: 'Toyota Camry',
          VehicleType: 'Sedan',
          VehiclePrice: '$30,000',
          VehicleFrom: 'Ho Chi Minh City',
          VehicleTo: 'Hanoi'
        },
        {
          vehicleId : 'vh002',
          VehicleName: 'Honda CR-V',
          VehicleType: 'SUV',
          VehiclePrice: '$35,000',
          VehicleFrom: 'Danang',
          VehicleTo: 'Nha Trang'
        },
        {
          vehicleId : 'vh003',
          VehicleName: 'Tesla Model S',
          VehicleType: 'Electric',
          VehiclePrice: '$80,000',
          VehicleFrom: 'Hanoi',
          VehicleTo: 'Phu Quoc'
        },
        {
          vehicleId : 'vh004',
          VehicleName: 'Mazda CX-5',
          VehicleType: 'SUV',
          VehiclePrice: '$40,000',
          VehicleFrom: 'Hanoi',
          VehicleTo: 'Da Lat'
        },
        {
          vehicleId : 'vh005',
          VehicleName: 'Hyundai Sonata Hybrid',
          VehicleType: 'Hybrid',
          VehiclePrice: '$50,000',
          VehicleFrom: 'Ho Chi Minh City',
          VehicleTo: 'Hue'
        },
        {
          vehicleId : 'vh006',
          VehicleName: 'Ford Ranger',
          VehicleType: 'Pickup Truck',
          VehiclePrice: '$45,000',
          VehicleFrom: 'Can Tho',
          VehicleTo: 'Vung Tau'
        }
      ];

    return (
        <>
                        <h5 className="card-title">Danh sách xe</h5>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên Xe</th>
                                    <th scope="col">Loại Phương Tiện</th>
                                    <th scope="col">Giá vé</th>
                                    <th scope="col">Khởi đầu</th>
                                    <th scope="col">Điểm kết thúc</th>
                                    <th>Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicles.map((v,index) => {
                                    return (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{v.VehicleName}</td>
                                            <td>{v.VehicleType}</td>
                                            <td>{v.VehiclePrice}</td>
                                            <td>{v.VehicleFrom}</td>
                                            <td>{v.VehicleTo}</td>
                                            <td>
                                              <Link to={`../detail/car/${v.vehicleId}`}>Chi tiết Xe</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
        </>
    );
}

export default EtpVehicleList;