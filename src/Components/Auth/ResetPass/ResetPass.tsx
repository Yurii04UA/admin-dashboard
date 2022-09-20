import React from "react";
import Button from "../../AnotherElements/Button/Button";
import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";
import AuthWindow from "../AuthWindow/AuthWindow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import './ResetPass.scss'

const ResetPass = () => {
  const [showPass1, setShowPass1] = useState(true);
  const [showPass2, setShowPass2] = useState(true);
  const [passOne,setPassOne] = useState('');
  const [passTwo,setPassTwo] = useState('');
  const [errMessage,setErrMessage] = useState('')
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(passOne!= passTwo){
      setErrMessage('Passwords must match');
    }
    setPassOne('');
    setPassTwo('');
  };
  return (
    <>
      <AuthWindow isFooter={true}>
        <div className="auth-reset">
          <AuthBodyTitle title="Reset Password" subTitle="Enter new password" />

          <form onSubmit={submitHandler}>
            <label>
              password
              <input
                className="input-icon"
                type={showPass1 ? "password" : "text"}
                placeholder="Password"
                value={passOne}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassOne(e.target.value)
                }
              />
              <button
                className="icon-1"
                onClick={() => setShowPass1(!showPass1)}
              >
                {showPass1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </button>
            </label>
            <label>
              confirm password
              <input
                className="input-icon"
                type={showPass2 ? "password" : "text"}
                placeholder="Password"
                value={passTwo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassTwo(e.target.value)
                }
              />
              <button
                className="icon-2"
                onClick={() => setShowPass2(!showPass2)}
              >
                {showPass2 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </button>
            </label>
            <Button children={"Send"}></Button>
          </form>
          <div className="error"> {errMessage? errMessage : null} </div>
        </div>
      </AuthWindow>
    </>
  );
};

export default ResetPass;
