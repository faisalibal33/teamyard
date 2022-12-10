import Highlight from "../../Components/pageComponent/highlight/highlight";
import SignupForm from "../../Components/pageComponent/signupForm/signupForm";
import SigninForm from "../../Components/pageComponent/signinForm/signinForm";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import logo from "../../assets/logoty.png";

const cookies = new Cookies();

const Signup = () => {
  const [signedin, setSignedin] = useState(false);

  useEffect(() => {
    cookies.set("signin", signedin, { path: "/" });
  }, [signedin]);
  const setPage = () => {
    setSignedin(true);
  };

  return (
    <div className="signupContainer">
      <div className="leftPart">
        <img src={logo} alt="logo" />
        {signedin ? <SigninForm /> : <SignupForm setPage={setPage} />}
      </div>
      <Highlight />
    </div>
  );
};

export default Signup;
