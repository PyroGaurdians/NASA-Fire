// import Login from "./Page/Login/Login";
import  "./App.css" 
import Awareness from "./Page/Awareness/Awareness";
// import Profile from "./Page/Profile/Profile";
import Report from "./Page/report/Report";
import Home from "./Page/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import {  Routes, Route } from 'react-router-dom';
  

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home />} />
        <Route element={<Awareness />} />
        <Route element={<Report />} />
      </Routes>
    </div>
  )
}

export default App
