import React from "react";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import "./App.css";
import "./index.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Themes />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
