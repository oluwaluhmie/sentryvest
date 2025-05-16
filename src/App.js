import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Loan from "./Pages/Loan";
import Investment from "./Pages/Investment";
import Complete from "./Pages/Complete";
import Admin from "./Pages/Admin";
import CentralAdmin from "./Pages/CentralAdmin";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68271a0bdf188e190db01623/1ircbrffu";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

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
            </>
          }
        />
        <Route path="/applyloan" element={<Loan />} />
        <Route path="/applyinvestment" element={<Investment />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/accesscontrol/*" element={<Admin />} />
        <Route path="/adminaccess/*" element={<CentralAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
