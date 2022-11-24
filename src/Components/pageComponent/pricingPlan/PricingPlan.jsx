import "./pricingPlan.css";

const PricingPlan = () => {
  return (
    <div className="pricingContainer" id="pricingPlan">
      <div>
        <p className="pricingTitle">Transform your workplace with Teamyard</p>
      </div>
      <div className="pricingBox">
        <div className="pricingCard">
          <p className="pricingCardTitle">Free</p>
          <div className="price">
            <span className="priceNumber">£0</span>
            <span>
              <p>/ month</p>
            </span>
          </div>
          <div className="priceDescBox">
            <div className="priceDesc">
              <p>For small teams 25 employees</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="pricingCard">
          <p className="pricingCardTitle">Startup</p>
          <div className="price">
            <span className="priceNumber">£8.25</span>
            <span>
              <p>/ month</p>
            </span>
          </div>
          <div>
            <p className="pricingtext">
              Per person per month, when billed £9.75/person per month when
              billed monthly
            </p>
          </div>
          <div className="priceDescBox">
            <div className="priceDesc">
              <p>For small businesses 26 - 100 employees</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="pricingCard">
          <p className="pricingCardTitle">Growing</p>
          <div className="price">
            <span className="priceNumber">£6.25</span>
            <span>
              <p>/ month</p>
            </span>
          </div>
          <div>
            <p className="pricingtext">
              Per person per month, when billed £7.75/person per month when
              billed monthly
            </p>
          </div>
          <div className="priceDescBox">
            <div className="priceDesc">
              <p>For small businesses 101 - 500 employees</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="pricingCard">
          <p className="pricingCardTitle">Growing</p>
          <div className="price">
            <span className="priceNumber">£6.25</span>
            <span>
              <p>/ month</p>
            </span>
          </div>
          <div>
            <p className="pricingtext">
              Per person per month, when billed £7.75/person per month when
              billed monthly
            </p>
          </div>
          <div className="priceDescBox">
            <div className="priceDesc">
              <p>For small businesses 101 - 500 employees</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
