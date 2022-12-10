import { useState } from "react";
import eye from "../../../assets/eye.png";
import google from "../../../assets/google.png";

const SigninForm = () => {
  const [visible, setVisible] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const postSignin = (e) => {
    e.preventDefault();
    console.log('signin');
  };

  return (
    <div className="signinContainer">
      <p className="title">Welcome to Teamyard</p>
      <form type="post" onSubmit={(e) => postSignin(e)}>
        <label>Work Email</label>
        <input className="input" type="text" placeholder="Example@teamyard.com" />
        <label>Password</label>
        <div className="passwordInput">
          <input type={visible ? "text" : "password"} placeholder="Use 8 - 20 Characters" />
          <button onClick={(e) => togglePassword(e, true)}>
            <img src={eye} alt="toggle" />
          </button>
        </div>
        <div className="submit">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <button className="googleSignin">
        <span className="logo">
          <img src={google} alt="google" />
        </span>
        <p className="desc">Sign In with Google</p>
      </button>
    </div>
  );
};

export default SigninForm;
