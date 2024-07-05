import "./App.css";
import { LandingPage } from "./client/landingPage/landingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import EnterprisePage from "./Enterprise/EnterpriseHome";
import EnterpirseIndex from "./Enterprise/EnterpriseIndex";
import EnterpiseResources from "./Enterprise/EnterpriseResources";
import EnterprisePost from "./Enterprise/EnterprisePost";
import CreatePost from "./Enterprise/Post/CreatePost";
import ShowPost from "./Enterprise/Post/ShowPost";
import ShowResources from "./Enterprise/Resources/ShowResources";
import CreateResources from "./Enterprise/Resources/CreateResources";
import EnterpriseStatistical from "./Enterprise/EnterpriseStatistical";
import FoodPage from "./client/food/FoodPage";
import { DetailFood } from "./client/food/DetailFood";
import FoodPage from "./components/Food/FoodPage";
import Footer from "./client/footer/footer";

function App() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/enterprise") && <Header />}
      <Routes>
        <Route path="/">
          <Route path="" element={<LandingPage />}></Route>
          <Route path="food">
            <Route path="" element={<FoodPage />}></Route>
            <Route path="detail" element={<DetailFood />} />
          </Route>
        </Route>

        <Route path="/transport" element={<h1>Phương tiện</h1>} />
        <Route path="/enterprise" element={<EnterpirseIndex />}>
          <Route path="" element={<EnterprisePage />}></Route>
          <Route path="resources" element={<EnterpiseResources />}>
            <Route path="" element={<ShowResources />}></Route>
            <Route path="create" element={<CreateResources />}></Route>
          </Route>

          <Route path="post" element={<EnterprisePost />}>
            <Route path="" element={<ShowPost />}></Route>
            <Route path="create" element={<CreatePost />}></Route>
          </Route>

          <Route path="statistical" element={<EnterpriseStatistical />}></Route>
        </Route>
      </Routes>
      {!location.pathname.includes("/enterprise") && <Footer />}
    </>
  );
}

export default App;
