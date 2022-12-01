import logo from "../../../assets/logoty.png";
import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerColumn">
        <div className="footerLeft">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <span>
            <p className="footerSubscribeText">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p className="footerText">Stay up-to-date with the latest from Teamyard!</p>
          </span>
          <span>
            <input type="text" placeholder="Email address" className="footerInput" />
            <button className="subscribeButton">SUBSCRIBE</button>
          </span>
        </div>
        <div className="footerAboutMore">
          <div className="footerLink">
            <p>ABOUT</p>
            <span>
              <a href="#home">Home</a>
              <a href="#home">Pricing Plans</a>
              <a href="#home">How it works</a>
              <a href="#home">What is Teamyard</a>
            </span>
          </div>
          <div className="footerLink">
            <p>MORE</p>
            <span>
              <a href="#home">Contact Us</a>
              <a href="#home">Terms and Conditions </a>
              <a href="#home">User Agreement</a>
              <a href="#home"> Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footerIconLink">
        <a href="#home">
          <BsTwitter style={{ color: "#0180b3", fontSize: "20px" }} />
        </a>
        <a href="#home">
          <BsFacebook style={{ color: "#0180b3", fontSize: "20px" }} />
        </a>
        <a href="#home">
          <AiFillInstagram style={{ color: "#0180b3", fontSize: "20px" }} />
        </a>
        <a href="#home">
          <FaLinkedinIn style={{ color: "#0180b3", fontSize: "20px" }} />
        </a>
        <a href="#home">
          <BsYoutube style={{ color: "#0180b3", fontSize: "20px" }} />
        </a>
      </div>
      <div className="footerCopyrights">
        <p>Copyrights © 2022 Teamyard. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
