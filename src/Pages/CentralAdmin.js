import React, { useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useResolvedPath,
  useLocation,
  useNavigate,
  matchPath,
} from "react-router-dom";
import logo from "../assets/adminlogo.png";
import logout from "../assets/logout.png";
import AdminDashboard from "./Admin/AdminDashboard";
import ContactList from "./Admin/ContactList";
import ContactPage from "./Admin/ContactPage";
import LoanList from "./Admin/LoanList";
import LoanPage from "./Admin/LoanPage";
import InvestmentList from "./Admin/InvestmentList";
import InvestmentPage from "./Admin/InvestmentPage";

const CentralAdmin = () => {
  const resolvedPath = useResolvedPath("");
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const userDetails =
    state?.userDetails || JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    if (!userDetails) {
      navigate("/adminaccess", { replace: true });
    } else {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/accesscontrol", { replace: true });
  };

  const isActive = (path) => {
    const fullPath = `${resolvedPath.pathname}${path}`;
    return (
      location.pathname === fullPath ||
      (path === "/" && location.pathname === resolvedPath.pathname)
    );
  };

  const isPathActive = (basePath) => {
    return matchPath(
      { path: `${resolvedPath.pathname}${basePath}`, end: false },
      location.pathname
    );
  };

  return (
    <div className="flex gap-3 px-3 py-3 w-full h-screen bg-adminColor">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-1/4 h-full bg-white overflow-y-hidden">
        {/* Logo */}
        <div className="flex flex-col px-9 py-8 h-28">
          <img src={logo} alt="logo" className="h-12 w-42" />
        </div>
        {/* Menu items */}
        <div className="flex flex-col h-full">
          <Link
            to={`${resolvedPath.pathname}`}
            className={`px-12 py-4 ${
              isActive("")
                ? "bg-buttonColor/10 border border-buttonColor/25 rounded-xl shadow-admin"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isActive("") ? "text-buttonColor font-bold" : "text-homeColor"
              }`}
            >
              Home
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/loan`}
            className={`px-12 py-4 ${
              isPathActive("/loan")
                ? "bg-buttonColor/10 border border-buttonColor/25 rounded-xl shadow-admin"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/loan") ? "text-buttonColor font-bold" : "text-homeColor"
              }`}
            >
              Loan Applications
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/investment`}
            className={`px-12 py-4 ${
              isPathActive("/investment")
                ? "bg-buttonColor/10 border border-buttonColor/25 rounded-xl shadow-admin"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/investment")
                  ? "text-buttonColor font-bold"
                  : "text-homeColor"
              }`}
            >
              Investment Applications
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/contact`}
            className={`px-12 py-4 ${
              isPathActive("/contact")
                ? "bg-buttonColor/10 border border-buttonColor/25 rounded-xl shadow-admin"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/contact")
                  ? "text-buttonColor font-bold"
                  : "text-homeColor"
              }`}
            >
              Contact Leads
            </p>
          </Link>
        </div>
        {/* Admin name & Logout icon */}
        <div className="flex flex-row px-9 py-6 border border-homeColor/10 bg-white h-23 rounded-2xl shadow-name">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-col">
              <p className="text-homeColor opacity-40 text-sm">Admin</p>
              <span className="font-gotham text-base text-homeColor">
                {userDetails?.firstname} {userDetails?.lastname}
              </span>
            </div>
            <img
              src={logout}
              alt="logout"
              className="w-6 h-6 cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col w-3/4 overflow-y-scroll">
        <Routes>
          <Route path="loan" element={<LoanList />} />
          <Route path="/loan/:id" element={<LoanPage />} />
          <Route path="investment" element={<InvestmentList />} />
          <Route path="/investment/:id" element={<InvestmentPage />} />
          <Route path="contact" element={<ContactList />} />
          <Route path="contact/:id" element={<ContactPage />} />
          <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  );
};

export default CentralAdmin;
