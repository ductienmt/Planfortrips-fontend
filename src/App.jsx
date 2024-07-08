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

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/enterprise") && <Header />}
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






      {!location.pathname.includes("/enterprise") && <Footer />}

      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/food") && <Footer />}

    </>
  );
}

export default App;
