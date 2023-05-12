import { useState } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { login } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Footer from "../../components/Footer/Footer";

export default function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  async function onLogin() {
    try {
      if (email && password) {
        const loginResponse = await login({ email, password });
        localStorage.setItem("token", loginResponse.data.token);
        console.log(loginResponse)
        navigate("/home");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Email or Password invalid");
    }
  }

  function render() {
    return (
      <Card sx={{ width: "90%", backgroundColor: "#FFFFE0", border: "solid", borderRadius: "10px" }} raised={true}>
        <CardHeader title="Login"></CardHeader>

        <CardContent>
          <TextField
            label="Email"
            variant="outlined"
            placeholder="example@gmail.com"
            fullWidth={true}
            margin="dense"
            autoComplete="on"
            InputProps={{
              startAdornment: <Email />,
            }}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onLogin();
            }}
          ></TextField>

          <TextField
            label="Password"
            type={isPassVisible ? "text" : "password"}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={handleClick}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onLogin();
            }}
          ></TextField>
        </CardContent>

        <Divider />

        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => navigate("/signUp")}
            size="small"
            color="secondary"
            variant="contained"
            sx={{ marginRight: "1vw" }}
          >
            Register
          </Button>

          <Button
            onClick={() => onLogin()}
            size="small"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <>
      <LoginHeader />
      <Grid
        container /*item xs={12} md={8} xl={10}*/
        sx={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {render()}
      </Grid>
      <Footer />
    </>
  );
}
