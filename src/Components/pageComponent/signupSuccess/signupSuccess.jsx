const SignupSuccess = () => {
  const requestEmail = () => {
    console.log('request email');
  };
  return (
    <div className="signupSuccessContainer">
      <h1 className="title">Congratulations!</h1>
      <p className="description">Please check your email, we have sent you a verification email. If can’t find the email? Check your spam folder! Or request a new email.</p>
      <button onClick={requestEmail} className="emailRequest">Request a new email</button>
    </div>
  );
};

export default SignupSuccess;
