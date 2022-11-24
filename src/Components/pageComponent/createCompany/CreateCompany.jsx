import React from "react";
import img101 from "../../../assets/101.png";
import img102 from "../../../assets/102.png";
import img103 from "../../../assets/103.png";
import img104 from "../../../assets/104.png";
import img105 from "../../../assets/105.png";
import img106 from "../../../assets/106.png";
import img107 from "../../../assets/107.png";
import img108 from "../../../assets/108.png";
import img109 from "../../../assets/109.png";
import img110 from "../../../assets/110.png";
import "./createCompany.css";

const CreateCompany = () => {
  return (
    <div className="createCompanyContainer">
      <div>
        <p className="ccTitle">
          Create your company on Teamyard and Invite colleagues
        </p>
      </div>
      <div>
        <button className="ccButton">Start for Free</button>
      </div>
      <div className="imgTop">
        <span>
          <img src={img110} alt="createCompany" />
        </span>
        <span>
          <img src={img109} alt="createCompany" />
        </span>
        <span>
          <img src={img108} alt="createCompany" />
        </span>
        <span>
          <img src={img107} alt="createCompany" />
        </span>
        <span>
          <img src={img106} alt="createCompany" />
        </span>
      </div>
      <div className="imgTop">
        <span>
          <img src={img105} alt="createCompany" />
        </span>
        <span>
          <img src={img104} alt="createCompany" />
        </span>
        <span>
          <img src={img103} alt="createCompany" />
        </span>
        <span>
          <img src={img102} alt="createCompany" />
        </span>
        <span>
          <img src={img101} alt="createCompany" />
        </span>
      </div>
    </div>
  );
};

export default CreateCompany;
