import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";
import AuthWindow from "../AuthWindow/AuthWindow";
import Button from "../../AnotherElements/Button/Button";
import { useState } from "react";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(" ");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailErr("");
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!reg.test(String(email).toLocaleLowerCase())) {
      setEmailErr("Incorrect email");
    }

    if (!email) {
      setEmailErr("Field must not be empty");
    }

    setEmail("");
  };

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
          <Button children={"Send"} url={''} />
        </form>
      </AuthWindow>
    </div>
  );
};

export default ResetPass;
