import AuthWindow from "../AuthWindow/AuthWindow";
import Button from '../../AnotherElements/Button/Button';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import '../Login/Login.scss';
import './Registration.scss';
import { useState } from "react";
import AuthBodyTitle from "../AuthWindow/AuthBodyTitle";

const Registration = () => {
    const [showPass1, setShowPass1] = useState(true);
    const [showPass2, setShowPass2] = useState(true);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };
    return (
        <>
            <AuthWindow isFooter={false}>
                <div className="auth-reg">
                    <AuthBodyTitle title="Sing up" subTitle="Create a new account" />
                    <form onSubmit={submitHandler}>
                        <label>
                            email
                            <input type="text" placeholder="Email address" />
                        </label>
                        <label>
                            first name
                            <input type="text" placeholder="First name" />
                        </label>
                        <label>
                            last name
                            <input type="text" placeholder="Last name" />
                        </label>
                        <label>
                            password
                            <input className="input-icon" type={showPass1 ? "password" : "text"} placeholder="Password" />
                            <button className="icon-1" onClick={() => setShowPass1(!showPass1)}>
                                {showPass1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </button>
                        </label>
                        <label>
                            confirm password
                            <input className="input-icon" type={showPass2 ? "password" : "text"} placeholder="Password" />
                            <button className="icon-2" onClick={() => setShowPass2(!showPass2)}>
                                {showPass2 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </button>
                        </label>
                        <Button children={'Sing up'} />
                    </form>
                </div>
            </AuthWindow>
        </>
    );
};

export default Registration;