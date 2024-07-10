import { useEffect } from "react";
import { useState } from "react";
import { GetAllProvinces } from "../../../../Api/Api3rd/VnLocationApi";


function EtpVehicleForm_Step1() {

    const [locationForm, setForm] = useState([]);
    const [localtionTo, setTo] = useState('');

    // Load danh sách điểm bắt đầu
    useEffect(() => {
        GetAllProvinces().then((res) => setForm(res.results))
    },[])

    console.log(locationForm);

    const vehicleType = [
        {
            vehicleTypeId : '1',
            vehicleTypeName : 'Xe'
        },
        {
            vehicleTypeId : '1',
            vehicleTypeName : 'Máy bay'
        },
    ]

    return (
        <>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Loại phương tiện</label>
            <select className="form-control">
               {vehicleType.map((vh) => {
                return (
                    <option value={vh.vehicleTypeId}>{vh.vehicleTypeName}</option>
                )
               })}
            </select>
        </div>

        <div className="mb-3">
            <div className="row">
                <div className="col-6">
                <label htmlFor="" className="form-label">Điểm bắt đầu</label>
                <select name="" id="" className="form-control"> 
                    {locationForm.map((f,index) => {
                        return (
                            <option value={f.province_id} key={index}>{f.province_name}</option>
                        )
                    })}
            </select>
                </div>

                <div className="col-6">
                <label htmlFor="" className="form-label">Điểm kết thúc</label>
                <select name="" id="" className="form-control"> 
                <option value=""></option>
            </select>
                </div>
            </div>
               
        </div>

        
        </>
    )
    
}

export default EtpVehicleForm_Step1;