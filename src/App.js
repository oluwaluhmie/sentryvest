import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import ScrollToTop from "./Components/scrollToTop";
import LoanPage from "./Pages/LoanPage";
import InvestmentPage from "./Pages/InvestmentPage";

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
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
