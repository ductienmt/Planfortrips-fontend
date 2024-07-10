import { useEffect } from "react";
import { useState } from "react";
import { GetAllProvinces } from "../../../../Api/Api3rd/VnLocationApi";


function EtpVehicleForm_Step1({setDataVehicle}) {

    const [locationForm, setForm] = useState([]);
    const [localtionFormId, setLocationFormId] = useState('');

    const [localtionTo, setLocationTo] = useState([]);
    const [locationToId, setLocationId] = useState('');

    // Load danh sách điểm bắt đầu
    useEffect(() => {
        GetAllProvinces().then((res) => setForm(res.results))
    },[])

    // Load điểm kết thúc khi thay đổi điểm bắt đầu
    useEffect(() => {
            setLocationId('');
            if (localtionFormId && setLocationFormId ) {
             GetAllProvinces().then((res) => 
                setLocationTo(res.results.filter((p) => p.province_id !== localtionFormId)))
            }
    },[localtionFormId])

    const vehicleType = [
        {
            vehicleTypeId : '1',
            vehicleTypeName : 'Xe'
        },
        {
            vehicleTypeId : '2',
            vehicleTypeName : 'Máy bay'
        },
    ]

    return (
        <>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Loại phương tiện</label>
            <select className="form-control" defaultValue={''} onChange={(e) => setDataVehicle('vehicleType',e.target.value)}>
                <option value="" disabled>Chọn loại phương tiện</option>
               {vehicleType.map((vh,index) => {
                return (
                    <option value={vh.vehicleTypeId} key={index}>{vh.vehicleTypeName} 
                    </option>
                )
               })}
            </select>
        </div>

        <div className="mb-3">
        <label htmlFor="" className="form-label">Tuyến đường</label>
            <div className="row">
                <div className="col-6">
                <select name="" id="" className="form-control" value={localtionFormId}
                 onChange={(e) => setLocationFormId(e.target.value)}>
                    <option value="" disabled>Chọn điểm bắt đâu</option> 
                    {locationForm.map((f,index) => {
                        return (
                            <option value={f.province_id} key={index}>{f.province_name}</option>
                        )
                    })}
            </select>
                </div>

                <div className="col-6">
                <select name="" id="" className="form-control" value={locationToId} onChange={(e) => setLocationId(e.target.value)}> 
                    <option value="" disabled>Chọn điểm kết thúc</option> 
                    {localtionTo.map((lTo,index) => {
                        return (
                            <option value={lTo.province_id} key={index}>{lTo.province_name}</option>
                        )
                    })}
            </select>
                </div>
            </div>
               
        </div>

        
        </>
    )
    
}

export default EtpVehicleForm_Step1;