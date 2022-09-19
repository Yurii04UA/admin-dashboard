import AuthWindow from "../AuthWindow/AuthWindow";
import "./Login.scss";
import Button from "../../AnotherElements/Button/Button";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const validationLogin = () => {
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(String(email).toLocaleLowerCase())) {
      setEmailErr("Incorrect email");
    }
    if (!email) {
      setEmailErr("Field must not be empty");
    }
    if (!pass) {
      setPassErr("Field must not be empty");
    }
    if (!emailErr && !passErr) {
      setShowForgotPass(true);
      setErrMessage("Incorrect login or password");
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setPassErr("");
    setEmailErr("");
    validationLogin();
    setEmail("");
    setPass("");
  };

  const fogotPass = (
    <>
      <div className="error">{errMessage}</div>
      <div className="forgot-pass">
        <div>Forgot your password?</div>
        <Link to="/reset-password"> Click!</Link>
      </div>
    </>
  );

  return (
    <>
      <AuthWindow isFooter={true}>
        <div className="auth-login">
          <AuthBodyTitle
            title="Log In to Dashboard Kit"
            subTitle="Enter your email and password"
          />
          <form onSubmit={submitHandler}>
            <label>
              email
              <div className="error">{emailErr ? emailErr : null}</div>
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </label>

            <label>
              password
              <div className="error">{passErr ? passErr : null}</div>
              <input
                className="input-icon"
                type={showPass ? "password" : "text"}
                placeholder="Password"
                value={pass}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPass(e.target.value)
                }
              />
              <button
                type="button"
                className="icon"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </button>
            </label>
            <Button children={"Log in"} />
          </form>
        </div>
        {showForgotPass ? fogotPass : null}
      </AuthWindow>
    </>
  );
};

export default Login;
