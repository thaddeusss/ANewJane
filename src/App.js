import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import "./index.css";
import MainRoutes from "./MainRoutes";
// import BackAnimate from "./components/BackAnimate";

const App = () => {
  return (
    <>
      <Themes />
      <Navbar />
      <MainRoutes />
      {/* <BackAnimate /> */}
    </>
  );
};

export default App;
