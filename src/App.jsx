import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnterprisePage from './Enterprise/EnterpriseHome';
import EnterpirseIndex from './Enterprise/EnterpriseIndex';
import EnterpiseResources from './Enterprise/EnterpriseResources';
import EnterprisePost from './Enterprise/EnterprisePost';
import CreatePost from './Enterprise/Post/CreatePost';
import ShowPost from './Enterprise/Post/ShowPost';
import ShowResources from './Enterprise/Resources/ShowResources';
import CreateResources from './Enterprise/Resources/CreateResources';
import EnterpriseStatistical from './Enterprise/EnterpriseStatistical';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Đây là App.jsx</h2>} />

        {/* // Begin Route Enterprise */}
        <Route path="/enterprise" element={<EnterpirseIndex/>}>
          <Route path='' element={<EnterprisePage/>}></Route>
          <Route path='resources' element={<EnterpiseResources/>}>
            <Route path='' element={<ShowResources/>}></Route>
            <Route path='create' element={<CreateResources/>}></Route>
          </Route>

          <Route path='post' element={<EnterprisePost/>}>
            <Route path='' element={<ShowPost/>}></Route>
            <Route path='create' element={<CreatePost/>}></Route>
          </Route>

          <Route path='statistical' element={<EnterpriseStatistical/>}></Route>
  
        </Route>
        {/* // End Route Enterprise */}

      </Routes>
    </Router>
  );
}

export default App;
