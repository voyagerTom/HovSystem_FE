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

import HomePage from "./pages/HomePage";

function App() {
  const driverRoute = "/driver";
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/passenger/get-carpool-by-site"
          element={<GetCarpoolBySite />}
        />
        <Route
          path="/passenger/check-my-carpool"
          element={<CheckMyCarpool />}
        />

        <Route path="/passenger/apply-for-driver" element={<Passenger />} />

        {/* 以下是司機Path */}
        <Route path={driverRoute} element={<Driver />} />
        <Route
          path={`${driverRoute}/getmycarpool`}
          // element={<GetMyCarpool />}
          element={<GetMyCarpool isHis="" />}
        />
        <Route path={`${driverRoute}/launchcarpool`} element={<Driver />} />
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
