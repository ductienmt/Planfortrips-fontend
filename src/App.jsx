import "./App.css";
import { LandingPage } from "./pages/landingPage/landingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import FoodPage from "./client/food/FoodPage";
import Footer from "./client/footer/footer";
import Hotel from "./client/hotel/hotel";

import EnterpriseIndex from "./Enterprise/EnterpriseIndex";
import { TransportPage } from "./client/transport/transportPage";
import FlightItemPage from "./client/transport/formFlight/flightItem/FlightItemPage";
import EtpVehicleList from "./Enterprise/components/List/EtpVehicleList";
import EtpPostList from "./Enterprise/components/List/EtpPostList";
import EtpRestaurantList from "./Enterprise/components/List/EtpRetaunrantList";
import EtpHotelList from "./Enterprise/components/List/EtpHotelList";
import EtpNewsIndex from "./Enterprise/components/News/EtpNewsIndex";
import EtpVehicleHome from "./Enterprise/components/Home/EtpVehicleHome";
import EtpRestaurantHome from "./Enterprise/components/Home/EtpRestaurantHome";
import EtpHotelHome from "./Enterprise/components/Home/EtpHotelHome";
import EtpVehicleForm from "./Enterprise/components/Form/EtpVehicleForm";
import EtpBusesForm from "./Enterprise/components/Form/EtpBusesForm";
import EtpBusesList from "./Enterprise/components/List/EtpBusesList";
import EtpRestaurantForm from "./Enterprise/components/Form/EtpRestaurantForm";
import EtpRestaurantDetail from "./Enterprise/components/Detai/EtpRestaurantDetail";
import EtpHotelForm from "./Enterprise/components/Form/EtpHotelForm";
import EtpHotelDetail from "./Enterprise/components/Detai/EtpHotelDetai";
import EtpCarDetail from "./Enterprise/components/Detai/EtpCarDetail";
import { DetailFood } from "./client/food/detailFood/DetailFood";
import CarItemPage from "./client/transport/formCar/carItem/CarItemPage";
import HorizontalNonLinearStepper from "./client/transport/formFlight/passenger/Stepper";
import { PassengerPage } from "./client/transport/formFlight/passenger/PassengerPage";
import DetailCard from "./client/hotel/detailHotel/detailCard";
import BookingHotel from "./client/hotel/booking/bookingHotel";
import Payment from "./client/hotel/payment/payment";
import Login from "./client/login/login";
import EtpBusesDetail from "./Enterprise/components/Detai/EtpBusesDetail";
import EtpLogin from "./Enterprise/components/Account/EtpLogin";

// import Content from './components/Content';
import Userlist from "./Admin/Userlist";
import FeedbackPage from "./Admin/FeedbackPage";
import TransactionPage from "./Admin/TransactionPage";
import BusinessPage from "./Admin/BusinessPage";
import StatisticsPage from "./Admin/StatisticsPage";
import TravelfreePage from "./Admin/Travelfree";
import Adminlogin from "./Admin/AdminLogin";
import Adminaccount from "./Admin/Adminaccount";
function App() {
  const location = useLocation();

  return (
    <>
      {!(
        location.pathname.includes("/enterprise") ||
        location.pathname.includes("/admin")
      ) && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}></Route>

        <Route path="/hotel">
          <Route path="" element={<Hotel />}></Route>
          <Route path="detail" element={<DetailCard />}></Route>
          <Route path="booking" element={<BookingHotel />}></Route>
          <Route path="payment" element={<Payment />}></Route>
        </Route>

        <Route path="food">
          <Route path="" element={<FoodPage />}></Route>
          <Route path="detail" element={<DetailFood />} />
        </Route>
        <Route path="transport">
          <Route path="" element={<TransportPage />}></Route>
          <Route path="flight">
            <Route path="" element={<FlightItemPage />} />
            <Route path="passenger" element={<HorizontalNonLinearStepper />} />
          </Route>
          <Route path="car" element={<CarItemPage />}></Route>
        </Route>

        {/* Begin Route Enterprise */}
        <Route path="/enterprise" element={<EnterpriseIndex />}>
          {/* <Route index element={<EtpHome/>}></Route> */}

          {/* Route Etp-Vehicle */}
          <Route path="vehicle">
            <Route index element={<EtpVehicleHome />}></Route>
            <Route path="create" element={<EtpVehicleForm />}></Route>
            <Route path="list" element={<EtpVehicleList />}></Route>

            <Route path="buses">
              <Route index element={<EtpBusesList />}></Route>
              <Route path="create" element={<EtpBusesForm />}></Route>
              <Route path=":busesId" element={<EtpBusesDetail />}></Route>
            </Route>

            <Route path="detail">
              <Route path="car/:carId" element={<EtpCarDetail />}></Route>
              <Route path="plane/:planeId"></Route>
            </Route>
          </Route>

          {/* Route Etp-Post */}
          <Route path="post">
            <Route path="list" element={<EtpPostList />}></Route>
          </Route>

          <Route path="login" element={<EtpLogin />}></Route>

          {/* Route Etp-Restaurant */}
          <Route path="restaurant">
            <Route index element={<EtpRestaurantHome />}></Route>
            <Route path="create" element={<EtpRestaurantForm />}></Route>
            <Route path="list" element={<EtpRestaurantList />}></Route>
            <Route
              path="detail/:rtrId"
              element={<EtpRestaurantDetail />}
            ></Route>
          </Route>

          <Route path="news">
            <Route index element={<EtpNewsIndex />}></Route>
          </Route>
          {/* Route Etp-Hotel */}
          <Route path="hotel">
            <Route index element={<EtpHotelHome />}></Route>
            <Route path="create" element={<EtpHotelForm />}></Route>
            <Route path="detail/:hId" element={<EtpHotelDetail />}></Route>
            <Route path="list" element={<EtpHotelList />}></Route>
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<StatisticsPage />} />
        <Route path="/admin/userlist" element={<Userlist />} />
        <Route path="/admin/transaction" element={<TransactionPage />} />
        <Route path="/admin/business" element={<BusinessPage />} />
        <Route path="/admin/feedback" element={<FeedbackPage />} />
        <Route path="/admin/travelfree" element={<TravelfreePage />} />
        <Route path="/admin/adminlogin" element={<Adminlogin />} />
        <Route path="/admin/adminaccount" element={<Adminaccount />} />
      </Routes>

      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/admin") && <Footer />}
    </>
  );
}

export default App;
