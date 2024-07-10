import { useState } from "react";
import EtpVehicleForm_Step1 from "../Step/Vehicle/EtpVehicleForm_Step1";
import EtpVehicleForm_Step2 from "../Step/Vehicle/EtpVehicleForm_Step2";

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

    const handlePrevStep = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    return (  
        <>
            <h5 className="card-title">Thêm phương tiện</h5>
            {step === 1 && <EtpVehicleForm_Step1 />}
            {step === 2 && <EtpVehicleForm_Step2 />}

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
