import React from "react";
import Navbar from "../../Components/pageComponent/navbar/Navbar";
import "./contactUs.css"

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contactUsContainer">
        <div className="contactUsTitle">
          <p>Contact Us</p>
        </div>
        <div className="cuInput">
          <div className="cuInputLeft">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Work Email" />
            <input type="text" placeholder="Phone Number"/>
          </div>
          <div className=" cuInputRight">
            <input type="text" placeholder="Company Name"/>
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div className="cuButtonContainer">
          <button className="cuButton">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
