import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";
import ForgotPass from "../Auth/ForgotPass/ForgotPass";
import HomePage from "../HomePage/HomePage";
import ForgotPassAnswer from "../Auth/ForgotPassAnswer/ForgotPassAnswer";
import ResetPass from "../Auth/ResetPass/ResetPass";


const Application = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorisation" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/forgot-password-answer" element={<ForgotPassAnswer />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </div>
  );
};

export default Application;
