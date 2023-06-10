import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import home from "./pages/home/home";
import about from "./pages/about/about";
import portfolio from "./pages/portfolio/portfolio";
import contact from "./pages/contact/contact";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route imdex element={<home />} />
        <Route path="about" element={<about />} />
        <Route path="portfolio" element={<portfolio />} />
        <Route path="contact" element={<contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
