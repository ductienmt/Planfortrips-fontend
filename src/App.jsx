import "./App.css";


import { LandingPage } from "./pages/landingPage/landingPage";

import { LandingPage } from "./client/landingPage/landingPage";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import FoodPage from "./client/food/FoodPage";
import { DetailFood } from "./client/food/detailFood/DetailFood";
import Footer from "./client/footer/footer";
import Hotel from "./client/hotel/hotel";
import EnterpriseIndex from "./Enterprise/EnterpriseIndex";
import EtpHome from "./Enterprise/EtpHome";
import VehicleForm from "./Enterprise/components/Form/VehicleForm";
import PostForm from "./Enterprise/components/Form/PostForm";
import VehicleList from "./Enterprise/components/List/VehicleList";
import PostList from "./Enterprise/components/List/PostList";

import Content from './components/Admin/Content';
import FeedbackPage from './components/Admin/FeedbackPage';
import TransactionPage from './components/Admin/TransactionPage';
import BusinessPage from './components/Admin/BusinessPage';
import StatisticsPage from './components/Admin/StatisticsPage';
import SupportPage from './components/Admin/SupportPage';

// import Content from './components/Content';
import Userlist from './Admin/Userlist'
import FeedbackPage from './Admin/FeedbackPage';
import TransactionPage from './Admin/TransactionPage';
import BusinessPage from './Admin/BusinessPage';
import StatisticsPage from './Admin/StatisticsPage';
import TravelfreePage from './Admin/Travelfree';
import Adminlogin from "./Admin/AdminLogin"
import Adminaccount from "./Admin/Adminaccount";
function App() {
  const location = useLocation();

  return (
    <>
      {!(location.pathname.includes("/enterprise") || location.pathname.includes("/admin")) && <Header />}


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enterprise" element={<EnterpriseIndex />}>
          <Route index element={<EtpHome />}></Route>

          <Route path="vehicle">
            <Route path="create" element={<VehicleForm />}></Route>
            <Route path="list" element={<VehicleList />}></Route>
          </Route>
          <Route path="post">
            <Route path="create" element={<PostForm />}></Route>
            <Route path="list" element={<PostList />}></Route>
          </Route>
        </Route>
        <Route path="/hotel" element={<Hotel />} />
        <Route path="food">
          <Route path="" element={<FoodPage />}></Route>
          <Route path="detail" element={<DetailFood />} />
        </Route>

        <Route path='/content' element={<Content />}  >
          <Route path='transaction' element={<TransactionPage />} />
          <Route path='business' element={<BusinessPage />} />
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='feedback' element={<FeedbackPage />} />
          <Route path='support' element={<SupportPage />} />
        </Route>


      </Routes>

      <Routes>
        <Route path='/admin' element={<StatisticsPage />} />
        <Route path='/admin/userlist' element={<Userlist />} />
        <Route path='/admin/transaction' element={<TransactionPage />} />
        <Route path='/admin/business' element={<BusinessPage />} />
        <Route path='/admin/feedback' element={<FeedbackPage />} />
        <Route path='/admin/travelfree' element={<TravelfreePage />} />
        <Route path='/admin/adminlogin' element={<Adminlogin />} />
        <Route path='/admin/adminaccount' element={<Adminaccount />} />
      </Routes>


      {!location.pathname.includes("/enterprise") && !location.pathname.includes("/admin") &&
        <Footer />}

    </>
  );
}

export default App;
