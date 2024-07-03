import { Outlet } from "react-router";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import '/public/css/enterprise.css';


function EnterpirseIndex() {
   
    const enterpriseFakeData = {
      enterpriseType : 'Phương tiện',
      enterpriseName : 'Phương Trang',
      enterpriseImage : 'https://cdn.futabus.vn/futa-busline-web-cms-prod/Zalo_11b66ecb81/Zalo_11b66ecb81.png',
    };


    return (
        <>
        <Header enterpriseName={enterpriseFakeData.enterpriseName}/>  
            <Outlet/>
        <Footer/>         
        </>
      );
}

export default EnterpirseIndex;