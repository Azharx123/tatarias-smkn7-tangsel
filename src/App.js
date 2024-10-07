import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Hairstyle from "./pages/Hairstyle";
import Salon from "./pages/Salon";
import Treatment from "./pages/Treatment";
import Tatarias from "./pages/Tatarias";
import ScrollToTop from "./pages/ScrollToTop";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/belajar-hairstyle" element={<Hairstyle />} />
            <Route path="/belajar-salon" element={<Salon />} />
            <Route path="/belajar-treatment" element={<Treatment />} />
            <Route path="/belajar-tatarias" element={<Tatarias />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
