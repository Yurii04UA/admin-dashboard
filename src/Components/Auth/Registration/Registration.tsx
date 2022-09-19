import AuthWindow from "../AuthWindow/AuthWindow";
import Button from '../../AnotherElements/Button/Button';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import '../Login/Login.scss';
import './Registration.scss';
import { useState } from "react";

const Registration = () => {
    const [showPass, setShowPass] = useState(true);
    return (
        <>
            <AuthWindow isFooter={false}>
                <div className="auth-reg">
                    <div className='title'>
                        <h2>Sign Up</h2>
                        <p>Create a new account</p>
                    </div>
                    <form >
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
                            <input type="password" placeholder="Password" />
                            
                        </label>
                        <label>
                            confirm password
                            <input type="password" placeholder="Password" />
                        </label>
                        <Button children={'Sing up'} url={"/"} isCorrect={true}/>
                    </form>
                </div>
            </AuthWindow>
        </>
    );
};

export default Registration;