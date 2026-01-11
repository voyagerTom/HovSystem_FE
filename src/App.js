import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Passenger from "./pages/Passenger";
import Driver from "./pages/Driver";
import Admin from "./pages/Admin";
import "./styles/style.scss";
import CheckMyCarpool from "./pages/passenger/CheckMyCarpool";
import GetMyCarpool from "./pages/driver/GetMyCarpool";

import GetCarpoolBySite from "./pages/passenger/GetCarpoolBySite";

function App() {
  const driverRoute = "/driver";
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/passenger" element={<Passenger />} />
        <Route
          path="/passenger/getCarpoolBySite"
          element={<GetCarpoolBySite />}
        />
        <Route path="/passenger/checkMyCarpool" element={<CheckMyCarpool />} />
        {/* <Route path="/passenger/checkMyCarpool" element={<可以模仿添加子功能，記得去NAV添加 />} /> */}

        {/* 以下是司機Path */}
        <Route path={driverRoute} element={<Driver />} />
        <Route
          path={`${driverRoute}/getmycarpool`}
          // element={<GetMyCarpool />}
          element={<GetMyCarpool isHis="" />}
        />
        <Route
          path={`${driverRoute}/launchcarpool`}
          element={<GetCarpoolBySite />}
        />
        <Route
          path={`${driverRoute}/getmyhiscarpool`}
          // element={GetMyCarpool("his")}
          element={<GetMyCarpool isHis="his" />}
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
