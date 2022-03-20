import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Content } from "./pages/Content";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <BrowserRouter>
        <Content />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
