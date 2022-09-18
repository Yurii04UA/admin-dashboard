import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from "../Auth/Login/Login";
import HomePage from "../HomePage/HomePage";


const Application = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorisation" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Application;
