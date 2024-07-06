import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avartar from '../assets/images/pexels-photo-1162361-removebg-preview.png';
import logoBrand from '../assets/images/planfortrips-logo.png';

function EtpSideBar() {
  const [isActive, setIsActive] = useState(0);


  console.log(isActive);

  return (
    <>
      <aside className="left-sidebar">
        {/* Sidebar scroll */}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img className="img-fluid mt-2 rounded" src={logoBrand} width={180} alt="" />
            </a>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Thông tin</span>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 0 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="" 
                  onClick={() => setIsActive(0)}
                >
                  <span>
                    <i className="ti ti-layout-dashboard" />
                  </span>
                  <span className="hide-menu">Trang chủ</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 1 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="news" 
                  onClick={() => setIsActive(1)}
                >
                  <span>
                    <i className="ti ti-news"></i>
                  </span>
                  <span className="hide-menu">Tin tức</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Tài nguyên</span>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 2 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="vehicle/create" 
                  onClick={() => setIsActive(2)}
                >
                  <span>
                    <i className="ti ti-circle-plus"></i>
                  </span>
                  <span className="hide-menu">Thêm phương tiện</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 3 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="vehicle/list" 
                  onClick={() => setIsActive(3)}
                >
                  <span>
                    <i className="ti ti-car"></i>
                  </span>
                  <span className="hide-menu">Danh sách xe</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Bài đăng</span>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 4 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="post/create" 
                  onClick={() => setIsActive(4)}
                >
                  <span>
                    <i className="ti ti-book-upload"></i>
                  </span>
                  <span className="hide-menu">Tạo bài đăng</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 5 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="post/list" 
                  onClick={() => setIsActive(5)}
                >
                  <span>
                    <i className="ti ti-message-2-share"></i>
                  </span>
                  <span className="hide-menu">Danh sách bài đăng</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Khác</span>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 6 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="settings" 
                  onClick={() => setIsActive(6)}
                >
                  <span>
                    <i className="ti ti-settings"></i>
                  </span>
                  <span className="hide-menu">Cài đặt</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 7 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="support" 
                  onClick={() => setIsActive(7)}
                >
                  <span>
                    <i className="ti ti-headset"></i>
                  </span>
                  <span className="hide-menu">Hỗ trợ khách hàng</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  className={isActive === 8 ? 'sidebar-link active' : 'sidebar-link'} 
                  to="help" 
                  onClick={() => setIsActive(8)}
                >
                  <span>
                    <i className="ti ti-help"></i>
                  </span>
                  <span className="hide-menu">Trợ giúp</span>
                </Link>
              </li>
            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
              <div className="d-flex">
                <div className="unlimited-access-title me-3">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                    Đăng kí gói VIP
                  </h6>
                  <a
                    href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                    target="_blank"
                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                  >
                    Mua
                  </a>
                </div>
                <div className="unlimited-access-img">
                  <img
                    src={avartar}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll */}
      </aside>
    </>
  );
}

export default EtpSideBar;