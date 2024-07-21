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
        <Route path='/admin' element={<StatisticsPage />} />
        <Route path='/admin/userlist' element={<Userlist />} />
        <Route path='/admin/transaction' element={<TransactionPage />} />
        <Route path='/admin/business' element={<BusinessPage />} />
        <Route path='/admin/feedback' element={<FeedbackPage />} />
        <Route path='/admin/travelfree' element={<TravelfreePage />} />
        <Route path='/admin/adminlogin' element={<Adminlogin />} />
        <Route path='/admin/adminaccount' element={<Adminaccount />} />
      </Routes>
      {!(location.pathname.includes("/enterprise") || location.pathname.includes("/admin")) && <Footer />}

    </>
  );
}

export default App;
