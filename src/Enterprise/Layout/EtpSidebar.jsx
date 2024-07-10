import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avartar from '../assets/images/pexels-photo-1162361-removebg-preview.png';
import logoBrand from '../assets/images/planfortrips-logo.png';

function EtpSideBar() {
  const typeEtp = sessionStorage.getItem('typeEtp')
  const Mylocation = useLocation();


  const isActive = (path) => {
    return Mylocation.pathname.endsWith(path) ? 'sidebar-link active' : 'sidebar-link';
  };

  const clclcss = (path) => {
    console.log(location.pathname);
    console.log(path);
  }

  const navi = useNavigate()
  useEffect(() => {
    if (typeEtp === null) {
        navi('login')
    }
  },[typeEtp])



  return (
    <>
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img className="img-fluid mt-2 rounded" src={logoBrand} width={180} alt="" />
            </a>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Thông tin</span>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('enterprise')} to="">
                  <span>
                    <i className="ti ti-layout-dashboard" />
                  </span>
                  <span className="hide-menu">Trang chủ</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('/news')} to="news" onClick={() => clclcss('news')}>
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

              {typeEtp === 'vehicle' && (
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
                </>
              )}



              {typeEtp === 'restaurant'&& (
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
              )}
           
           {typeEtp === 'hotel' && (
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
           )}

           

           

             

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Bài đăng</span>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('/post/create')} to="post/create">
                  <span>
                    <i className="ti ti-book-upload"></i>
                  </span>
                  <span className="hide-menu">Tạo bài đăng</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('/post/list')} to="post/list">
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
                <Link className={isActive('/settings')} to="settings">
                  <span>
                    <i className="ti ti-settings"></i>
                  </span>
                  <span className="hide-menu">Cài đặt</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('/support')} to="support">
                  <span>
                    <i className="ti ti-headset"></i>
                  </span>
                  <span className="hide-menu">Hỗ trợ khách hàng</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={isActive('/help')} to="help">
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
        </div>
      </aside>
    </>
  );
}

export default EtpSideBar;
