import LoginHeader from "../../components/LoginHeader/LoginHeader";
import logo from "../../assets/Full_Logo.png"
import { Button } from "@mui/material";
import "./init.css";

const Init = () => {

  return (
    <>
      <LoginHeader />
      <div className="fondo">
        <div className="=container">asdqweasd</div>
        <img className="logo" src={logo} />
        <div className="signin">
          <Button sx={{ my: 2, color: "black", display: "inline" }}>
            <b>Sign up</b>
          </Button>
          |
          <Button sx={{ my: 2, color: "black", display: "inline" }}>
            <b>Log in</b>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Init;
