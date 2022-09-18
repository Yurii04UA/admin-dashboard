import AuthWindow from "../AuthWindow/AuthWindow";
import "./Login.scss";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [showPass, setShowPass] = useState(true);

  return (
    <>
      <AuthWindow>
        <div className="auth-login">
          <h2>Log In to Dashboard Kit</h2>
          <p>Enter your email and password</p>
          <form onSubmit={submitHandler}>
            <label>
              email
              <input type="text" />
            </label>
            <label>
              password
              <input
                className="input-icon"
                type={showPass ? "password" : "text"}
              />
              <button className="icon" onClick={() => setShowPass(!showPass)}>
                {showPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </button>
            </label>
            <button type="submit">a</button>
          </form>
        </div>
      </AuthWindow>
    </>
  );
};

export default Login;
