import { useState } from "react";
import eye from "../../../assets/eye.png";
import google from "../../../assets/google.png";

const SignupForm = ({ setPage }) => {
  const [visible, setVisible] = useState(false);
  const [confirm, setConfrim] = useState(false);

  const togglePassword = (e, val = false) => {
    e.preventDefault();
    val ? setVisible(!visible) : setConfrim(!confirm);
  };

  const postSignup = (e) => {
    e.preventDefault();
    console.log("test");
  };

  return (
    <div className="signupFormContainer">
      <p className="title">Welcome to Teamyard</p>
      <form type="post" onSubmit={(e) => postSignup(e)}>
        <label>Work Email</label>
        <input className="input" type="text" placeholder="Example@teamyard.com" />
        <label>Password</label>
        <div className="passwordInput">
          <input type={visible ? "text" : "password"} placeholder="Use 8 - 20 Characters" />
          <button onClick={(e) => togglePassword(e, true)}>
            <img src={eye} alt="toggle" />
          </button>
        </div>
        <label>Confirm Password</label>
        <div className="passwordInput">
          <input type={confirm ? "text" : "password"} placeholder="Confirm your password" />
          <button onClick={(e) => togglePassword(e)}>
            <img src={eye} alt="toggle" />
          </button>
        </div>
        <div className="submit">
          <input type="submit" value="Sign Up for Free" />
        </div>
      </form>
      <button className="googleSignin">
        <span className="logo">
          <img src={google} alt="google" />{" "}
        </span>
        <p className="signup">Sign Up with Google</p>
      </button>
      <div className="signin">
        <span>Already have an account?</span>
        <button onClick={setPage}>Sign in</button>
      </div>
      <div className="requestInvite">
        <button>Request Invitation from HR</button>
        <p className="message">Your HR will send invitations link for you to join Teamyard</p>
      </div>
    </div>
  );
};
export default SignupForm;
