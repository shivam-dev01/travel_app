import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "./assets/fonts/Poppins-Bold.ttf";
import "./assets/fonts/Poppins-ExtraBold.ttf";
import "./assets/fonts/Poppins-ExtraLight.ttf";
import "./assets/fonts/Poppins-Light.ttf";
import "./assets/fonts/Poppins-Medium.ttf";
import "./assets/fonts/Poppins-Regular.ttf";
import "./assets/fonts/Poppins-SemiBold.ttf";
import Header from "./routers/header";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import ContactUs from "./pages/contactUs/contactUs";
import Destination from "./pages/destination/destination";
import Brochure from "./pages/brochure/brochure";
import TopHeader from "./components/topHeader/topHeader";
import TrippDetails from "./pages/tripDetails/tripDetails";
import Policy from "./pages/policy/policy";
import { useState } from "react";
import Sidenav from "./components/sideNav/Sidenav";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="appBody">
      <Router>
        <TopHeader />
        {toggleSidebar && <Sidenav setToggleSidebar={setToggleSidebar} />}
        <Header setToggleSidebar={setToggleSidebar} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destination/:destId" element={<Destination />} />
          <Route path="/tripp" element={<TrippDetails />} />
          <Route path="/e-brochure" element={<Brochure />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
