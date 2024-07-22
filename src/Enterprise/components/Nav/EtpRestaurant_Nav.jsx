import { Link } from "react-router-dom";

function EtpRestaurant_Nav({isActive, typeEtp}) {
    return (  
        <>
           {/* Nav Đồ Ăn */}
           <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Quán ăn</span>
              </li>
              <li className="sidebar-item">
                <Link className={isActive(`${typeEtp}/create`)} to={`${typeEtp}/create`}>
                  <span>
                    <i className="ti ti-circle-plus"></i>
                  </span>
                  <span className="hide-menu">Thêm quán ăn</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive(`${typeEtp}/list`)} to={`${typeEtp}/list`}>
                  <span>
                    <i className="ti ti-soup"></i>
                  </span>
                  <span className="hide-menu">Danh sách quán ăn</span>
                </Link>
              </li>
        </>
    );
}

export default EtpRestaurant_Nav;