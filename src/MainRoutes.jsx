import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
