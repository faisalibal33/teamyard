import { BsCheck2Circle } from "react-icons/bs";
import "./benefits.css";
import faxels from "../../../assets/faxels.png";
import olia from "../../../assets/olia.png";

const Benefits = () => {
  return (
    <div className="benefitsContainer" id="benefits">
      <div className="backHiw"></div>
      <div>
        <p className="benefitsTitle"> Benefits joining Teamyard </p>
      </div>
      <div className="benefitDisplay">
        <div className="benefitsBody">
          <div className="benefitDetail">
            <div>
              <p className="benefitSub">Benefits for Companies</p>
            </div>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
          </div>
          <div className="benefitImage">
            <img src={faxels} alt="benefitimage" />
          </div>
        </div>
        <div className="benefitsBody">
          <div className="benefitImage imgBot">
            <img src={olia} alt="benefitimage" />
          </div>
          <div className="benefitDetail DetailBot">
            <div>
              <p className="benefitSub">Benefits for Companies</p>
            </div>

            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
            <span>
              <BsCheck2Circle style={{ color: "#0990C6" }} />
              <p>Increase and track employees enggagement</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
