import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import ScrollToTop from "./Components/scrollToTop";
import Apply from "./Pages/Apply";
import ApplyContactDetails from "./Pages/ApplyContactDetails";
import ApplyWorkStatus from "./Pages/ApplyWorkStatus";
import ApplyPersonal from "./Pages/ApplyPersonal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <Works />
              <About />
              <Footer />
              <ScrollToTop />
            </>
          }
        />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply1" element={<ApplyPersonal />} />
        <Route path="/apply2" element={<ApplyContactDetails />} />
        <Route path="/apply3" element={<ApplyWorkStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
