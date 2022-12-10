import Highlight from "../../Components/pageComponent/highlight/highlight";
import SignupForm from "../../Components/pageComponent/signupForm/signupForm";
import SigninForm from "../../Components/pageComponent/signinForm/signinForm";
import SignupSuccess from "../../Components/pageComponent/signupSuccess/signupSuccess";
import RequestInvite from "../../Components/pageComponent/requestInvite/RequestInvite";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import logo from "../../assets/logoty.png";

const cookies = new Cookies();

const Signup = () => {
  const [toSignin, settoSignin] = useState(false);
  const [signedup, setSignedup] = useState(false);
  const [invite, setInvite] = useState(false);
  useEffect(() => {
    cookies.set("signin", toSignin, { path: "/" });
  }, [toSignin]);

  const setPage = () => {
    settoSignin(true);
  };

  const onRegister = () => {
    setSignedup(true);
  };

  const requestHR = () => {
    setInvite(true);
  };

  return (
    <div className="signupContainer">
      <div className="leftPart">
        <img src={logo} alt="logo" />
        {invite ? (
          <RequestInvite />
        ) : toSignin ? (
          <SigninForm />
        ) : signedup ? (
          <SignupSuccess />
        ) : (
          <SignupForm
            setPage={setPage}
            onRegister={onRegister}
            requestHR={requestHR}
          />
        )}
      </div>
      <Highlight />
    </div>
  );
};

export default Signup;
