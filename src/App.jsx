import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import Footer from "./client/footer/footer";
import { LandingPage } from "./pages/landingPage/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
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
        <Route path="/transport" element={<h1>Phương tiện</h1>} />
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

      </Routes>
      {!location.pathname.includes("/enterprise") && <Footer />}
    </>
  );
}

export default App;
