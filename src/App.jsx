// import Login from "./Page/Login/Login";
import "./App.css";
import Awareness from "./Page/Awareness/Awareness";
// import Profile from "./Page/Profile/Profile";
import Report from "./Page/report/Report";
import Home from "./Page/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import DealFire from "./Page/DealFire/DealFire";
import Evactuate from "./Page/EvactuateFire/Evactuate";
import ConfirmFire from "./Page/ConfirmFire/ConfirmFire";
import FireSitutation from "./Page/Fire Situtation/FireSitutation";
import Map from "./Page/Map/Map";

function App() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "100%", overflowX: "hidden", overflowY: "auto" }}>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Awareness />} path='/awareness' />
          <Route element={<Report />} path='/report' />
          <Route element={<DealFire />} path='/awareness' />
          <Route element={<DealFire />} path='/awareness/dealfire' />
          <Route element={<Evactuate />} path='/awareness/evactuate' />
          <Route element={<ConfirmFire />} path='/awareness/confirmFire' />
          <Route
            element={<FireSitutation />}
            path='/awareness/firesitutation'
          />
          <Route element={<Map />} path='/map' />
        </Routes>
      </div>

      <Navbar />
    </div>
  );
}

export default App;
