import { useState } from "react";
import EtpVehicleForm_Step1 from "../Step/Vehicle/EtpVehicleForm_Step1";
import EtpVehicleForm_Step2_Car from "../Step/Vehicle/EtpVehicleForm_Step2_Car";
import EtpVehicleForm_Step2_Plane from "../Step/Vehicle/EtpVehicleForm_Step2_Plane";

function VehicleForm() {
    const [step, setStep] = useState(1);
    const maxSteps = 2; // Giả sử có 2 bước, bạn có thể thay đổi số này tùy theo số bước bạn có
    
    const handleNextStep = () => {
        if (step < maxSteps) {
            setStep((prev) => prev + 1);
        } else {
            // Xử lý submit form ở đây
            console.log("Form submitted");
        }
    };

    const [vehicle,setVehicle]  = useState({
        vehicleType : '',
        locationForm : '',
        locationTo : ''
    })

    const setDataVehicle = (key, value) => {
        setVehicle((prev) => ({
            ...prev,
            [key]: value
        }));
    };





    const handlePrevStep = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    return (  
        <>

            <h5 className="card-title">Thêm phương tiện</h5>
            {step === 1 && <EtpVehicleForm_Step1 setDataVehicle={setDataVehicle}/>}
            {step === 2 && 
                (vehicleType === '1' ? <EtpVehicleForm_Step2_Car/> : <EtpVehicleForm_Step2_Plane/>)
            }

            <div className="d-flex">
            {step > 1 && (
                <button className="btn btn-secondary d-block me-2" onClick={handlePrevStep}>Trở về</button>
            )}
            <button className="btn btn-primary d-block me-2" onClick={handleNextStep}>
                {step === maxSteps ? "Submit" : "Bước tiếp theo"}
            </button>
            </div>
        </>
    );
}

export default VehicleForm;
