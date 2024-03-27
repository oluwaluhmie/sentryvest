import logo from "../assets/SentryVestWhite.png";
import facebook from "../assets/facebook.svg";
import phone from "../assets/phone.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      id="footerSection"
      className="flex flex-col items-center bg-homeColor gap-6 px-4 py-4 md:flex-row md:px-24"
    >
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
        <img src={logo} alt="" className="w-48" />
        <p className="text-servicesBg text-center text-sm md:text-left md:w-96">
          Our mission is to democratize access to wealth-building opportunities
          by providing tailored financial products, education, and support to
          underserved communities.
        </p>
        <div className="flex gap-4">
          <Link to="https://www.facebook.com/sentryvest">
            <img src={facebook} alt="" />
          </Link>
          <Link to="https://wa.me/2347067887356">
            <img src={phone} alt="" />
          </Link>
          <Link to="https://www.instagram.com/sentryvest">
            <img src={instagram} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/sentryvestlimited">
            <img src={linkedin} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-6 text-white md:w-1/2 md:gap-12 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="font-DMsans text-base font-semibold">OUR SERVICES</p>
          <p>Personal loan</p>
          <p>Business loan</p>
          <p>Investment</p>
        </div>
        <div className="flex flex-col items-center md:items-center gap-2 text-sm">
          <p className="font-DMsans text-base font-semibold">CONTACT US</p>
          <div className="flex items-center gap-2">
            <img src={call} alt="" />
            <p>+234 706 788 7356</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={mail} alt="" />
            <p>social@realifesentry.com</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={location} alt="" />
            <p>
              Afin-Iyanu close off Springfield <br />
              Hotel Ologuneru Ibadan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
