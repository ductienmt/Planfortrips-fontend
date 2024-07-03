import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/transport" element={<h1>Phương tiện</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
