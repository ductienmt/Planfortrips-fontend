import { useLocation } from "react-router-dom";
import EtpHotelNews from "./EtpHotelNews";
import EtpRestaurantNews from "./EtpRetaurantNews";
import EtpVehicleNews from "./EtpVehicleNews";

function EtpNewsIndex() {
    const typeEtp = sessionStorage.getItem('typeEtp')

    return ( 
        <>
        {/* Loại doanh nghiệp nào thì Mouted tin tức đó */}
        <h5 className="card-title">Tin tức (Api từ bên thứ 3)</h5>
        {typeEtp === 'vehicle' && <EtpVehicleNews/>}
        {typeEtp === 'restaurant' && <EtpRestaurantNews/>}
        {typeEtp === 'hotel' && <EtpHotelNews/>}

        {/* Nếu lastPart là Enterprise thì có nghĩa là chưa chọn loại doanh nghiệp */}
        {typeEtp === null && <span className="text-danger fs-5">Chưa có loại doanh nghiệp, Vui lòng chọn loại doanh nghiệp</span>}

        </>
     );
}

export default EtpNewsIndex;