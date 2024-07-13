import { Outlet, useNavigate } from 'react-router-dom';
import './assets/css/styles.min.css';
import './assets/css/mycss.css'
import EtpSideBar from './Layout/EtpSidebar.jsx';
import EtpHeader from './Layout/EtpHeader.jsx';

function EnterpriseIndex() {

  return ( 
    <>
      {/* Body Wrapper */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <EtpSideBar />
          <EtpHeader>
          <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <Outlet />
          </div>
          </div>
          </div>
          </EtpHeader>
        </div>
    </>
  );
}

export default EnterpriseIndex;
