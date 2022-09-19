import AuthWindow from "../AuthWindow/AuthWindow";
import "./Login.scss";
import Button from '../../AnotherElements/Button/Button';
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const Login = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [showPass, setShowPass] = useState(true);
  const [isLogin,setIsLogin] = useState(false)

  return (
    <>
      <AuthWindow>
        <div className="auth-login">
          <div className='title'>
            <h2>Log In to Dashboard Kit</h2>
            <p>Enter your email and password</p>
          </div>
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
            <Button children={'Log in'} url={"/"} isCorrect={isLogin}/>
          </form>
        </div>
      </AuthWindow>
    </>
  );
};

export default Login;
