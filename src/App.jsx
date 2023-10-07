// import Login from "./Page/Login/Login";
import  "./App.css" 
import Awareness from "./Page/Awareness/Awareness";
// import Profile from "./Page/Profile/Profile";
import Report from "./Page/report/Report";
import Home from "./Page/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import {  Routes, Route } from 'react-router-dom';
import DealFire from "./Page/DealFire/DealFire";
import Evactuate from "./Page/EvactuateFire/Evactuate";
import ConfirmFire from "./Page/ConfirmFire/ConfirmFire";
import FireSitutation from "./Page/Fire Situtation/FireSitutation";


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home />}    path="/" />
        <Route element={<Awareness />}  path = "/awareness" />
        <Route element={<Report />}  path="/report"/>
        <Route element={<DealFire />}   path="/awareness"/> 
        <Route element={<DealFire />}   path="/awareness/dealfire"/> 
        <Route element={<Evactuate/>}   path="/awareness/evactuate"/> 
        <Route element={<ConfirmFire/>}   path="/awareness/confirmFire"/> 
        <Route element={<FireSitutation/>}   path="/awareness/firesitutation"/> 
      </Routes>

    </div>
  )
}

export default App
