import { useRef } from "react";
import Benefits from "../../Components/pageComponent/benefits/Benefits";
import CompanyJoin from "../../Components/pageComponent/companyJoin/CompanyJoin";
import CreateCompany from "../../Components/pageComponent/createCompany/CreateCompany";
import Footer from "../../Components/pageComponent/footer/Footer";
import HowItWorks from "../../Components/pageComponent/howItWorks/HowItWorks";
import LandingDisplay from "../../Components/pageComponent/landingDisplay/LandingDisplay";
import Navbar from "../../Components/pageComponent/navbar/Navbar";
import PricingPlan from "../../Components/pageComponent/pricingPlan/PricingPlan";
import WhatIsTeamYard from "../../Components/pageComponent/whatIsTeamyard/WhatIsTeamYard";
import "./LandingPage.css";

const LandingPage = () => {
  const landingScroll = useRef();
  return (
    <div className="landingPageContainer">
      <div className="landingPageIsi">
        <Navbar landingScroll={landingScroll} />
        <div ref={landingScroll}>
          <LandingDisplay />
        </div>
        <CompanyJoin />
        <WhatIsTeamYard />
        <HowItWorks />
        <PricingPlan />
        <Benefits />
        <CreateCompany />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
