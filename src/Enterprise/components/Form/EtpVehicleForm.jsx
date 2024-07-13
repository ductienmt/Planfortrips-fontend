import { useState } from "react";
import EtpVehicleForm_Car from "./Vehicle/EtpVehicleForm_Car";
import EtpVehicleForm_Plane from "./Vehicle/EtpVehicleForm_Plane";

function EtpVehicleForm() {
    const [vehicleType, setVehicleType] = useState('car'); 

    return ( 
        <>
            <div className="tab-buttons">
                <button 
                    className={`tab-button ${vehicleType === 'car' ? 'active' : ''}`} 
                    onClick={() => setVehicleType('car')}
                >
                    Thêm Xe
                </button>
                <button 
                    className={`tab-button ${vehicleType === 'plane' ? 'active' : ''}`} 
                    onClick={() => setVehicleType('plane')}
                >
                    Thêm Máy Bay
                </button>
            </div>
            <div className="tab-content">
                {vehicleType === 'car' && <EtpVehicleForm_Car />}
                {vehicleType === 'plane' && <EtpVehicleForm_Plane />}
            </div>
        </>
    );
}

export default EtpVehicleForm;
