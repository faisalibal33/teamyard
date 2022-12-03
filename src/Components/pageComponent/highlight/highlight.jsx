import cheerfull from "../../../assets/cheerfull.png";

import gokart from "../../../assets/16by9-image/gokart-16by9.png";
import tennis from "../../../assets/16by9-image/tennis-16by9.png";
import futsal from "../../../assets/16by9-image/futsal-16by9.png";
import whiteDots from "../../../assets/whiteDots.png";
import icon from "../../../assets/icon.png";
import icon2 from "../../../assets/icon2.png";
import golf from "../../../assets/golf-course.png";
import location from "../../../assets/location.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";

const Highlight = () => {
  return (
    <div className="highlightContainer">
      <div className="container">
        <div className="totalActivities">
          <img src={icon} alt="team" />
          <p>More than 50+ Activities</p>
        </div>
        <div className="whiteBox">
          <div className="activities">
            <div className="activity">
              <div className="image">
                <img src={gokart} />
              </div>
              <div className="description">
                <p className="title">Go Karting</p>
                <p className="time">Tuesday, 10 Jun. 18:30</p>
                <p className="price">£ 10 per person</p>
                <button>Join</button>
              </div>
              <div className="content">
                <div className="location">
                  <div className="tag">
                    <span>
                      <img src={location} alt="location" />
                    </span>
                    <span>Venue</span>
                  </div>
                  <p>TeamSport Go Karting West London</p>
                  <div className="tag">
                    <span>
                      <img src={golf} alt="golf" />
                    </span>
                    <span>Address</span>
                  </div>
                  <p>20 Allied Way, London W3 0RQ</p>
                </div>
                <div className="colleagues">
                  <div className="avatars">
                    <img src={img1} alt="avatar" />
                    <img src={img2} alt="avatar" />
                    <img src={img3} alt="avatar" />
                    <img src={img4} alt="avatar" />
                  </div>
                  <p className="extra">10+ more</p>
                </div>
              </div>
            </div>
            <div className="activity">
              <div className="image">
                <img src={futsal} />
              </div>
              <div className="description">
                <p className="title">Futsal</p>
                <p className="time">Thursday, 12 jun. 17:00</p>
                <p className="price">£ Free</p>
                <button>Join</button>
              </div>
              <div className="content">
                <div className="location">
                  <div className="tag">
                    <span>
                      <img src={location} />
                    </span>
                    <span>Venue</span>
                  </div>
                  <p>TeamSport Futsal center London</p>
                  <div className="tag">
                    <span>
                      <img src={golf} />
                    </span>
                    <span>Address</span>
                  </div>
                  <p>20 Allied Way, London W3 0RQ</p>
                </div>
                <div className="colleagues">
                  <div className="avatars">
                    <img src={img1} alt="avatar" />
                    <img src={img2} alt="avatar" />
                    <img src={img3} alt="avatar" />
                    <img src={img4} alt="avatar" />
                  </div>
                  <p className="extra">10+ more</p>
                </div>
              </div>
            </div>
            <div className="activity">
              <div className="image">
                <img src={tennis} />
              </div>
              <div className="description">
                <p className="title">Tennis</p>
                <p className="time">Saturday, 14 jun. 16:30</p>
                <p className="price">£ 20 per person</p>
                <button>Join</button>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={cheerfull} alt="cheerfull" />
        </div>
        <div className="explore">
          <img src={icon2} alt="team" />
          <p>Explore and Build Community</p>
        </div>
        <div className="whiteDots">
          <img src={whiteDots} />
        </div>
        <div className="joinedColleagues">
          <div className="topContent">
            <div className="pictures">
              <img src={img1} alt="picture" />
              <img src={img2} alt="picture" />
              <img src={img3} alt="picture" />
              <img src={img4} alt="picture" />
            </div>
            <p>15 Colleagues already joined</p>
          </div>
          <div className="separator"></div>
          <div className="bottomContent">
            <p className="cost">Cost:</p>
            <div className="right">
              <p className="price">£ 10 per person</p>
              <p className="invite">Invite more colleagues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
