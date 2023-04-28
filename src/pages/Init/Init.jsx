import LoginHeader from "../../components/LoginHeader/LoginHeader";
import logo from "../../assets/Full_Logo.png"
import { Box, Button } from "@mui/material";
import "./init.css";
import { Link } from "react-router-dom";

const Init = () => {

  return (
    <>
      <LoginHeader />
      <div className="fondo" style={{height:"150vh"}}>
        <div className="singUpContainer">
          <Link to="/login" style={{ textDecoration: 'none', color:"black", border:"solid",}}>
          <p className="=signup"> <b>SIGN UP &nbsp;  </b> </p>
          </Link> 

          <b className="line"> <p> | </p></b>
          <Link to="/login" style={{ textDecoration: 'none', color:"black", border:"solid" }}>
          <p className="login" >  <b> &nbsp; LOG IN</b> </p>
          </Link>
        </div>
      <img className="logo" src={logo} />
      <div className="text">We belive in good<div>food planner!</div></div>
      </div>
    </>
  );
};

export default Init;
