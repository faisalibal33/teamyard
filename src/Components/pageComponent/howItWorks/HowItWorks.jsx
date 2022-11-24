import "./howItWorks.css";
import useradd from "../../../assets/userAdd.png";
import Folder from "../../../assets/Folder.png";
import youngman from "../../../assets/youngmansmall.png";
import pexels from "../../../assets/pexelssmall.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import icon from "../../../assets/icon.png";

const HowItWorks = () => {
  return (
    <div className="containerhiw" id="howitworks">
      <div className="backHiw"></div>
      <div className="howitworksContainer">
        <div className="howitworksTitle">
          <p>How it works</p>
        </div>
        <div className="howitworksfirst">
          <div>
            <div className="hiwleft">
              <div className="hiwleftbutton">
                <button>Sign Up fo Free</button>
              </div>
              <div className="hiwleftAskJoin">
                <span>
                  <p className="hremail">HR Email</p>
                </span>
                <div className="hiwleftemail">
                  <p>Example@teamyard.com</p>
                </div>
                <div className="hiwleftButton">
                  <button>Ask to join Teamyard </button>
                </div>
              </div>
              <div className="hiwBot">
                <p>Join</p>
                <p>Choose a plan and Invite your employees to join Teamyard.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hiwCentral">
              <div className="hiwcenterbutton">
                <button className="button1">
                  <img src={useradd} alt="useradd" /> Manual Invite
                </button>
                <button className="button2">
                  <img src={Folder} alt="folder" /> Upload file
                </button>
              </div>
              <div className="hiwcenterbox">
                <div className="hiwcenter1">
                  <div className="imghiwcenter">
                    <span className="img1">
                      <img src={img1} alt="workit" />
                    </span>
                    <span>
                      <img src={img2} alt="workit" />
                    </span>
                    <span>
                      <img src={img3} alt="workit" />
                    </span>
                    <span>
                      <img src={img4} alt="workit" />
                    </span>
                  </div>
                  <span className="hiwtextcenter">
                    <p>15 Colleagues already joined</p>
                  </span>
                </div>
                <span>
                  <span>
                    <p>Cost: </p>
                  </span>
                  <span>
                    <p>£ 10 per person</p>
                    <p>Invite more colleagues</p>
                  </span>
                </span>
              </div>
            </div>
            <div className="hiwBot">
              <p>Connect</p>
              <p>
                Employees can suggest for invite another colleagues and create
                events
              </p>
            </div>
          </div>
          <div>
            <div className="hiwRight">
              <span>
                <img src={pexels} alt="workit" />
              </span>
              <span>
                <img src={youngman} alt="workit" />
              </span>
              <span className="moreThan">
                <span>
                  <img src={icon} alt="workit" />
                </span>
                <span className="activitiesBox">
                  <p>More than 50+ Activities</p>
                </span>
              </span>
            </div>
            <div className="hiwBot">
              <p>Enjoy</p>
              <p>
                Employees explore current events, join them or create new events
                and invite colleagues.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="hiwButton">Start for Free</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
