import { useState } from "react";
import { Directions, Email, FoodBank, Lock, Phone, TextFields, Visibility, VisibilityOff } from "@mui/icons-material";
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
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/auth";
import './SignUp.css'

export default function SignUp() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [role/*, setRole*/] = useState("user");
  const navigate = useNavigate();

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  async function goToRegister() {
    try {
      if (username && fullname && email && password && address && phone && category) {
        const loginResponse = await signUp({ username, fullname, email, password, address, phone, category, role })
        localStorage.setItem('token', loginResponse.data.token)
        navigate('/home')
      } else {
        throw new Error()
      }
    } catch (error) {
      alert('Any field is invalid')
    }
  }

  function render() {
    return (
      <Card sx={{ width: "90%", backgroundColor: blue[100] }} raised={true}>
        <CardHeader title="SignUp"></CardHeader>

        <CardContent>
          <TextField
            type="text"
            label="username"
            variant="outlined"
            placeholder="jose"
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <TextFields />,
            }}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>

          <TextField
            type="text"
            label="Full name"
            variant="outlined"
            placeholder="Pepito Pérez"
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <TextFields />,
            }}
            onChange={(e) => setFullname(e.target.value)}
          ></TextField>

          <TextField
            type="email"
            label="Email"
            variant="outlined"
            placeholder="example@gmail.com"
            fullWidth={true}
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: <Email />,
            }}
          ></TextField>

          <TextField
            label="Password"
            type={isPassVisible ? "text" : "password"}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={handleClick}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          ></TextField>

          <TextField
            type="text"
            label="Address"
            variant="outlined"
            placeholder="Paseo Chil ..."
            fullWidth={true}
            margin="dense"
            onChange={(e) => setAddress(e.target.value)}
            InputProps={{
              startAdornment: <Directions />,
            }}
          ></TextField>

          <TextField
            type="phone"
            label="Phone"
            variant="outlined"
            placeholder="678123456"
            fullWidth={true}
            margin="dense"
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              startAdornment: <Phone />,
            }}
          ></TextField>

          <TextField
            type="text"
            label="Category"
            variant="outlined"
            placeholder="Vegano"
            fullWidth={true}
            margin="dense"
            onChange={(e) => setCategory(e.target.value)}
            InputProps={{
              startAdornment: <FoodBank />,
            }}
          ></TextField>
        </CardContent>

        <Divider />

        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => goToRegister()}
            size="small"
            color="secondary"
            variant="contained"
            sx={{ marginRight: "1vw" }}>
            Register
          </Button>

          <Button
            onClick={() => navigate('/login')}
            size="small" color="primary" variant="contained">
            Login
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
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
  );
}
