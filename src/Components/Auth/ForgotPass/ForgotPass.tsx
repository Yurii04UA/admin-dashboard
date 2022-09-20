import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";
import AuthWindow from "../AuthWindow/AuthWindow";
import Button from "../../AnotherElements/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [sub,setSub] = useState(false)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailErr(" ");
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!reg.test(String(email).toLocaleLowerCase())) {
      setEmailErr("Incorrect email");
    };

    if (!email) {
      setEmailErr("Field must not be empty");
    };
    
    setEmail("");
    setSub(true);
  };
  
  const navigate = useNavigate();
      const redirectHandler = () => {
          navigate('/forgot-password-answer')
      };

  useEffect(() =>{
    if(sub&& emailErr===' ' ){
      redirectHandler(); 
    };

  },[emailErr]);

  return (
    <div className="auth-reset-pass">
      <AuthWindow isFooter={true}>
        <AuthBodyTitle
          title="Forgot password?"
          subTitle="Enter your email from registered account"
        />
        <form onSubmit={submitHandler}>
          <label>
            email
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </label>

          <div className="error">{emailErr ? emailErr : null}</div>
          <Button children={"Send"} />
        </form>


      </AuthWindow>
    </div>
  );
};

export default ForgotPass;
