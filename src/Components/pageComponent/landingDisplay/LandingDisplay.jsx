import "./landingDisplay.css";
import youngman from "../../../assets/youngman.png";
import cheerfull from "../../../assets/cheerfull.png";
import closefootball from "../../../assets/closefootball.png";
import pexelsalex from "../../../assets/pexelsalex.png";
import icon from "../../../assets/icon.png";

const LandingDisplay = () => {
  return (
    <div className="landingDisplayContainer" id="home">
      <div className="landingDisplayLeft">
        <span>
          <p className="textLandingLeft">
            Transforming well being and team engagement at the work place
            through team sports and activities
          </p>
          <button className="startForFreeButton">Start for free</button>
        </span>
      </div>
      <div className="landingDisplayRight">
        <span className="img1">
          <img src={closefootball} alt="" />
          <span className="imgBoxLd">
            <span className="iconLd">
              <img src={icon} alt="icon" />
            </span>
            <p>More than 50+ Activities</p>
          </span>
        </span>
        <span className="img2">
          <img src={youngman} alt="" />
        </span>
        <span className="img3">
          <img src={pexelsalex} alt="" />
        </span>
        <span className="img4">
          <img src={cheerfull} alt="" />
        </span>
      </div>
    </div>
  );
};

export default LandingDisplay;
