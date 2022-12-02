import { Link } from "react-router-dom";
import logo from "../../../assets/logoty.png";

const Navbar = ({ landingScroll }) => {
  const goto = (ref) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div
            className="navbarLogo"
            onClick={() => goto(landingScroll.current)}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="teamyardlogo" className="teamyardLogo" />
          </div>
          <span className="navTag">
            <a href="/#whatisteamyard">What is Teamyard</a>
          </span>
          <span className="navTag">
            <a href="/#howitworks">How it works</a>
          </span>
          <span className="navTag">
            <a href="/#pricingPlan">Pricing plan</a>
          </span>
          <span className="navTag">
            <a href="#benefits">Benefits</a>
          </span>
          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <span className="navTag">
              <a href="#">Contact us</a>
            </span>
          </Link>
          <span className="navButton">
            <button>Sign In</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
