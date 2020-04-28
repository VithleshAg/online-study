import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SignUp from "../Instructor/SignUp";
import SignIn from "../Instructor/SignIn";
import ForgotPassword from "../Instructor/ForgotPassword";
import Home from "./Home";

const Index = () => {
  const [child, setChild] = useState("");

  const navbarHandler = (navChild) => {
    setChild(navChild);
  };

  useEffect(() => {}, [child]);

  const getComponents = () => {
    if (child === "signin") {
      return <SignIn clickHandler={navbarHandler} />;
    } else if (child === "signup") {
      return <SignUp clickHandler={navbarHandler} />;
    } else if (child === "forgotpwd") {
      return <ForgotPassword clickHandler={navbarHandler} />;
    } else if (child === "home") {
      return <Home />;
    } else {
      return <Home />;
    }
  };

  return (
    <div>
      <Navbar clickHandler={navbarHandler} />
      {getComponents()}
    </div>
  );
};

export default Index;
