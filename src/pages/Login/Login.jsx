import { useState } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, TextField, } from "@mui/material";
import { blue } from "@mui/material/colors";
// import { Link } from "react-router-dom";
import { login } from '../../services/auth'
import { useNavigate } from "react-router-dom";
// import './Login.css'

export default function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  async function onLogin() {
    try {
      const loginResponse = await login({email, password})
      alert('LOGIN DONE', loginResponse)
    } catch (error) {
      alert('ERROR', error)
    }
  }

  function render() {
    return (
      <Card sx={{ width: "90%", backgroundColor: blue[100] }} raised={true}>
        <CardHeader title="Login"></CardHeader>

        <CardContent>
          <TextField
            label="Email"
            variant="outlined"
            placeholder="example@gmail.com"
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <Email />,
            }}
            onChange={(e) => setEmail(e.target.value)}
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
          ></TextField>
        </CardContent>

        <Divider />

        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Link to={"/signUp"}> */}
            <Button
              onClick={() => goToRegister()}
              size="small"
              color="secondary"
              variant="contained"
              sx={{ marginRight: "1vw" }}
            >
              Register
            </Button>
          {/* </Link> */}

          {/* <Link to={"/home"}> */}
            <Button
            onClick={() => onLogin()}
            size="small" color="primary" variant="contained">
              Login
            </Button>
          {/* </Link> */}
        </CardActions>
      </Card>
    );
  }

  return (
      <Grid container /*item xs={12} md={8} xl={10}*/
        sx={{ height: '85vh', display: "flex", flexDirection: 'column', justifyContent: "center", alignContent: 'center' }}>
        {render()}
      </Grid>
  );
}
