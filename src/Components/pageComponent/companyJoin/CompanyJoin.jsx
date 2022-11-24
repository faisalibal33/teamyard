import "./CompanyJoin.css";
import group from "../../../assets/Group.svg";
import group1 from "../../../assets/Group1.svg";
import group2 from "../../../assets/Group2.svg";
import group3 from "../../../assets/Group3.svg";

const CompanyJoin = () => {
  return (
    <div className="companyJoin">
      <div>
        <p className="textCompanyJoin">Company Already Enjoying Teamyard</p>
      </div>
      <div className="logoCompanyJoin">
        <span>
          <img src={group} alt="" />
        </span>
        <span>
          <img src={group1} alt="" />
        </span>
        <span>
          <img src={group2} alt="" />
        </span>
        <span>
          <img src={group3} alt="" />
        </span>
      </div>
    </div>
  );
};

export default CompanyJoin;
