import LoginHeader from "../../components/LoginHeader/LoginHeader";
import logo from "../../assets/Full_Logo.png"
import { Box, Button } from "@mui/material";
import "./init.css";
import { Link } from "react-router-dom";

const Init = () => {

  return (
    <>
      <LoginHeader />
      <div className="fondo">
        <div className="=container">
          <span className="text">We belive in good food planner!</span>
          <span> SIGN UP   </span>
          <span>LOG IN</span>
        </div>
      <img className="logo" src={logo} />
      </div>
    </>
  );
};

export default Init;
