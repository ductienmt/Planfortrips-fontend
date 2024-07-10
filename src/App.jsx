import "./App.css";
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
import EtpVehicleForm from "./Enterprise/components/Form/EtpVehicleForm";
import EtpVehicleList from "./Enterprise/components/List/EtpVehicleList";
import EtpPostForm from "./Enterprise/components/Form/EtpPostForm";
import EtpPostList from "./Enterprise/components/List/EtpPostList";
import EtpRestaurantForm from "./Enterprise/components/Form/EtpRestaurantForm";
import EtpRestaurantList from "./Enterprise/components/List/EtpRetaunrantList";
import EtpHotelForm from "./Enterprise/components/Form/EtpHotelForm";
import EtpHotelList from "./Enterprise/components/List/EtpHotelList";
import EtpNewsIndex from "./Enterprise/components/News/EtpNewsIndex";
import EtpVehicleHome from "./Enterprise/components/Home/EtpVehicleHome";
import EtpRestaurantHome from "./Enterprise/components/Home/EtpRestaurantHome";
import EtpHotelHome from "./Enterprise/components/Home/EtpHotelHome";
import EtpLogin from "./Enterprise/components/Form/EtpLogin";
import DetailCard from "./client/hotel/detailHotel/detailCard";
import Content from "./components/Content";
import FeedbackPage from "./components/FeedbackPage";
import TransactionPage from "./components/TransactionPage";
import BusinessPage from "./components/BusinessPage";
import StatisticsPage from "./components/StatisticsPage";
import TravelfreePage from "./components/Travelfree";
import HotPage from "./components/HotPage";
import Login from "./client/login/login";

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/admin") && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Begin Route Enterprise */}
        <Route path="/enterprise" element={<EnterpriseIndex />}>
          {/* Route Etp-Vehicle */}
          <Route path="vehicle">
            <Route index element={<EtpVehicleHome />}></Route>
            <Route path="create" element={<EtpVehicleForm />}></Route>
            <Route path="list" element={<EtpVehicleList />}></Route>
          </Route>

          {/* Route Etp-Post */}
          <Route path="post">
            <Route path="create" element={<EtpPostForm />}></Route>
            <Route path="list" element={<EtpPostList />}></Route>
          </Route>

          <Route path="login" element={<EtpLogin />}></Route>

          {/* Route Etp-Restaurant */}
          <Route path="restaurant">
            <Route index element={<EtpRestaurantHome />}></Route>
            <Route path="create" element={<EtpRestaurantForm />}></Route>
            <Route path="list" element={<EtpRestaurantList />}></Route>
          </Route>

          <Route path="news">
            <Route index element={<EtpNewsIndex />}></Route>
          </Route>
          {/* Route Etp-Hotel */}
          <Route path="hotel">
            <Route index element={<EtpHotelHome />}></Route>
            <Route path="create" element={<EtpHotelForm />}></Route>
            <Route path="list" element={<EtpHotelList />}></Route>
          </Route>
        </Route>

        <Route path="/hotel">
          <Route path="" element={<Hotel />} />
          <Route path="detail" element={<DetailCard />} />
        </Route>
        <Route path="food">
          <Route path="" element={<FoodPage />}></Route>
          <Route path="detail" element={<DetailFood />} />
        </Route>
        <Route path="/admin">
          <Route path="" element={<StatisticsPage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="content" element={<Content />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="travelfree" element={<TravelfreePage />} />
          <Route path="hot" element={<HotPage />} />
        </Route>
        <Route path="/login">
          <Route path="" element={<Login />} />
        </Route>
      </Routes>

      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/food") &&
        !location.pathname.includes("/admin") && <Footer />}
    </>
  );
}

export default App;
