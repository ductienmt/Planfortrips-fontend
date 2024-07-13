import { Link } from "react-router-dom";

function EtpHotel_Nav({isActive, typeEtp}) {
    return ( 
        <>
           {/* Nav Phương Tiện */}
           <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Khách sạn</span>
              </li>
              <li className="sidebar-item">
                <Link className={isActive(`${typeEtp}/create`)} to={`${typeEtp}/create`}>
                  <span>
                    <i className="ti ti-circle-plus"></i>
                  </span>
                  <span className="hide-menu">Thêm khách sạn</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive(`${typeEtp}/list`)} to={`${typeEtp}/list`}>
                  <span>
                    <i className="ti ti-window"></i>
                  </span>
                  <span className="hide-menu">Danh sách khách sạn</span>
                </Link>
              </li>
        </>
     );
}

export default EtpHotel_Nav;