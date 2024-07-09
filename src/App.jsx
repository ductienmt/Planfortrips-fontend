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

import Content from './components/Content';
import FeedbackPage from './components/FeedbackPage';
import TransactionPage from './components/TransactionPage';
import BusinessPage from './components/BusinessPage';
import StatisticsPage from './components/StatisticsPage';
import TravelfreePage from './components/Travelfree';
import HotPage from './components/HotPage'


function App() {
  const location = useLocation();
  return (
    <>
      {!(location.pathname.includes("/enterprise") || location.pathname.includes("/admin")) && <Header />}


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
      </Routes>

      <Routes>
        <Route path='/admin/transaction' element={<TransactionPage />} />
        <Route path='/admin/content' element={<Content />} />
        <Route path='/admin/business' element={<BusinessPage />} />
        <Route path='/admin' element={<StatisticsPage />} />
        <Route path='/admin/feedback' element={<FeedbackPage />} />
        <Route path='/admin/travelfree' element={<TravelfreePage />} />
        <Route path='/admin/hot' element={<HotPage />} />

      </Routes>
      {!(location.pathname.includes("/enterprise") || location.pathname.includes("/admin")) && <Footer />}

    </>
  );
}

export default App;
