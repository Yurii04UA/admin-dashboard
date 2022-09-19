import AuthWindow from "../AuthWindow/AuthWindow";
import "./Login.scss";
import Button from '../../AnotherElements/Button/Button';
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail('');
    setPass('');
  };
  const [showPass, setShowPass] = useState(true);

  return (
    <>
      <AuthWindow isFooter={true}>
        <div className="auth-login">
          <AuthBodyTitle title="Log In to Dashboard Kit" subTitle="Enter your email and password" />
          <form onSubmit={submitHandler}>
            <label>
              email
              <input 
                type="text" 
                placeholder="Email address" 
                value={email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </label>
            <label>
              password
              <input
                className="input-icon"
                type={showPass ? "password" : "text"}
                placeholder='Password' 
                value={pass}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
              />
              <button className="icon" onClick={() => setShowPass(!showPass)}>
                {showPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </button>
            </label>
            <Button children={'Log in'}/>
          </form>

        </div>
      </AuthWindow>
    </>
  );
};

export default Login;
