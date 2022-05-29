import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import birdsSVG from "./assets/website/birds.svg";
import flowers from "./assets/website/flowers.svg";

function App() {
  return (
    <>
      <div className="overflow-hidden w-screen h-screen fixed -z-30">
        <img
          className="absolute -right-[5%] sm:-right-32 w-[40%] -z-30 top-0"
          src={birdsSVG}
        />
        <img
          className="absolute -left-[5%] w-[60%] md:w-[40%] bottom-0 -z-30"
          src={flowers}
        />
      </div>
      <div className="md:w-[90%] overflow-hidden w-full mx-auto">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-work" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
