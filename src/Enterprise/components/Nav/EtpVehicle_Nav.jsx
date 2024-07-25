import { Link } from "react-router-dom";

function EtpVehicle_Nav({isActive, typeEtp}) {
    return ( 
        <>
        {/* Nav Phương Tiện */}
        <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Phương tiện</span>
                  </li>
                  <li className="sidebar-item">
                    <Link className={isActive(`${typeEtp}/create`)} to={`${typeEtp}/create`}>
                      <span>
                        <i className="ti ti-circle-plus"></i>
                      </span>
                      <span className="hide-menu">Thêm phương tiện</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className={isActive(`${typeEtp}/list`)} to={`${typeEtp}/list`}>
                      <span>
                        <i className="ti ti-car"></i>
                      </span>
                      <span className="hide-menu">Danh sách phương tiện</span>
                    </Link>
                  </li>

                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Tuyến</span>
                  </li>
                  <li className="sidebar-item">
                    <Link className={isActive(`${typeEtp}/buses/create`)} to={`${typeEtp}/buses/create`}>
                      <span>
                         <i class="ti ti-flag"></i>
                      </span>
                      <span className="hide-menu">Thêm tuyến</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className={isActive(`${typeEtp}/buses/`)} to={`${typeEtp}/buses/`}>
                      <span>
                        <i className="ti ti-map"></i>
                      </span>
                      <span className="hide-menu">Danh sách tuyến</span>
                    </Link>
                  </li>
        </>
     );
}

export default EtpVehicle_Nav;