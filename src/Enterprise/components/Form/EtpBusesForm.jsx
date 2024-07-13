import { useState } from "react";
import EtpBusesForm_Car from "./Buses/EtpBusesForm_Car";
import EtpBusesForm_Plane from "./Buses/EtpBusesForm_Plane";

function EtpBusesForm() {

    const [busesType, setBusesleType] = useState('car'); 

    return ( 
        <>
           <div className="tab-buttons">
                <button 
                    className={`tab-button ${busesType === 'car' ? 'active' : ''}`} 
                    onClick={() => setBusesleType('car')}
                >
                    Thêm chuyến xe
                </button>
                <button 
                    className={`tab-button ${busesType === 'plane' ? 'active' : ''}`} 
                    onClick={() => setBusesleType('plane')}
                >
                    Thêm chuyến bay
                </button>
            </div>
            <div className="tab-content">
                {busesType === 'car' && <EtpBusesForm_Car />}
                {busesType === 'plane' && <EtpBusesForm_Plane />}
            </div>
        </>
     );
}

export default EtpBusesForm;