import { useEffect, useState } from "react";
import { GetAllCarMakes, GetAllCarModelsByMakeId } from "../../../../Api/Api3rd/CarAppApi";

function EtpVehicleForm_Step2() {
    const [vehicleMakes, setVehicleMakes] = useState([]);
    const [makeId, setMakeId] = useState('');

    const [models, setModels] = useState([]);
    const [modelId, setModelId] = useState('');

    // Get dữ liệu khởi tạo trang
    useEffect(() => {
        GetAllCarMakes().then((res) => setVehicleMakes(res.data));  
    },[])

    // Get danh sách model car khi chọn hãng
    useEffect(() => {
            if (makeId) {
                // Set về mặc định
                setModelId('');
                GetAllCarModelsByMakeId(makeId).then((res) => setModels(res.data));
            }
    },[makeId])

    return ( 
        <>
        {/* Chọn hãng xe */}
           <div className="mb-3">
            <label htmlFor="" className="form-label">Hãng xe</label>
            <select name="" id="" className="form-control" 
            value={makeId} onChange={(e) => setMakeId(e.target.value)}>
                <option value={''} disabled>Chưa chọn hãng xe</option>
                    {vehicleMakes.map((vm,index) => {
                        return (
                            <option value={vm.id} key={index}>{vm.name}</option>
                        )
                    })}
            </select>
           </div>

        {/* Chọn tên xe */}
           <div className="mb-3">
            <label htmlFor="" className="form-label">Mẫu xe</label>
            <select name="" id="" className="form-control" 
            value={modelId} onChange={(e) => setModelId(e.target.value)}>
                <option value={''} disabled>Chưa chọn tên xe</option>
                    {models.map((vm,index) => {
                        return (
                            <option value={vm.id} key={index}>{vm.name}</option>
                        )
                    })}
            </select>
           </div>

           
           
        </>
     );
}

export default EtpVehicleForm_Step2;