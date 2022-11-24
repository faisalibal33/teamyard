import React from "react";
import Navbar from "../../Components/pageComponent/navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <p>Contact Us</p>
        </div>
        <div>
          <div>
            <input type="text" />
            <input type="email" />
            <input type="number" />
          </div>
          <div>
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
