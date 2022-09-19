import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";
import ResetPass from "../Auth/ResetPass/ResetPass";
import HomePage from "../HomePage/HomePage";


const Application = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorisation" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </div>
  );
};

export default Application;
