import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import ScrollToTop from "./Components/scrollToTop";
import Details from "./Pages/LoanPage";
import InvestmentPage from "./Pages/InvestmentPage";
import LoanPage from "./Pages/LoanPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ 
            <>
              {/* <Navbar />
              <Hero />
              <Services />
              <Works />
              <About />
              <Footer />
              <ScrollToTop /> */}
              <LoanPage />
              {/* <InvestmentPage /> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
