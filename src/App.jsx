import "./App.css";
import { LandingPage } from "./client/landingPage/landingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import FoodPage from "./client/food/FoodPage";
import { DetailFood } from "./client/food/DetailFood";
import Footer from "./client/footer/footer";
import Hotel from "./client/hotel/hotel";
import EnterpriseIndex from "./Enterprise/EnterpriseIndex";
import EtpHome from "./Enterprise/EtpHome";
import VehicleForm from "./Enterprise/components/Form/VehicleForm";
import PostForm from "./Enterprise/components/Form/PostForm";
import VehicleList from "./Enterprise/components/List/VehicleList";
import PostList from "./Enterprise/components/List/PostList";


function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/enterprise") && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enterprise" element={<EnterpriseIndex/>}>
            <Route index element={<EtpHome/>}></Route>
            
            <Route path="vehicle">
              <Route path="create" element={<VehicleForm/>}></Route>
              <Route path="list" element={<VehicleList/>}></Route>
            </Route>
            <Route path="post">
              <Route path="create" element={<PostForm/>}></Route>
              <Route path="list" element={<PostList/>}></Route>
            </Route>
            </Route>
        <Route path="/hotel" element={<Hotel />} />
        <Route path="food">
          <Route path="" element={<FoodPage />}></Route>
          <Route path="detail" element={<DetailFood />} />
        </Route>
      </Routes>
      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/food") && <Footer />}
    </>
  );
}

export default App;
