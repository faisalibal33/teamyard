import groupfriend from "../../../assets/groupfriends.png";
import manwoman from "../../../assets/manwoman.png";
import medium from "../../../assets/medium.png";
import titikbiru from "../../../assets/titikbiru.png";
import "./whatIsTeamYard.css";

const WhatIsTeamYard = () => {
  return (
    <div className="whatIsTeamYardContainer" id="whatisteamyard">
      <div className="whatisleft">
        <span>
          <p className="whatistext">What is Teamyard?</p>
          <p className="whatisdesc">
            Teamyard is a platform that provide enterprises with the
            infrastructure to allow people at work to connect, get more active
            and engage in more natural ways, with a focus on tackling health
            wellbeing, loneliness and mental wellness.
          </p>
          <button>Start for free</button>
        </span>
      </div>
      <div className="whatisright">
        <span className="img1">
          <img src={medium} alt="image" />
        </span>
        <span className="img2">
          <img src={manwoman} alt="image" />
        </span>
        <span className="img3">
          <img src={groupfriend} alt="image" />
          <img src={titikbiru} alt="titik" className="titikbiru" />
        </span>
      </div>
    </div>
  );
};

export default WhatIsTeamYard;
