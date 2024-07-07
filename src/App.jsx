import "./App.css";

import { LandingPage } from "./pages/landingPage/landingPage";
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
import FoodPage from "./components/Food/FoodPage";
import Footer from "./client/footer/footer";
import Hotel from "./client/hotel/hotel";

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
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/food" element={<FoodPage />} />
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

        <Route path='/content' element={<Content />} />
        <Route path='/transaction' element={<TransactionPage />} />
        <Route path='/business' element={<BusinessPage />} />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/support' element={<SupportPage />} />

      </Routes>





      {!location.pathname.includes("/enterprise") && <Footer />}
    </>
  );
}

export default App;
