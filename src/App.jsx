import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";

import Home from "./pages/home";
// import Login from "./pages/Login";
// import Admin from "./pages/Admin";
import EducationPolicy from "./pages/EducationPolicy.jsx";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-950 text-white font-[Poppins,sans-serif] min-h-screen flex flex-col">
        <Navbar />
        
          <div className="pt-[72px] flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} /> */}
            <Route path="/education-policy" element={<EducationPolicy />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}
