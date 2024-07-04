import "./App.css";
import { LandingPage } from "./pages/landingPage/landingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
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
import FoodPage from "./components/Food/FoodPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/food" element={<FoodPage />} />

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
    </>
  );
}

export default App;

