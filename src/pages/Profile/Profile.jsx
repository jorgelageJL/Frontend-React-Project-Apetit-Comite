import React, { useEffect, useState } from "react";
import { getProfile } from "../../Services/userServices";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProfile } from "../../Services/userServices";
import EditIcon from "@mui/icons-material/Edit";
<<<<<<< HEAD
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
=======
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
>>>>>>> 3018c9ec (MVP finished. Thanks god)
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../Services/userServices";
import {
  Directions,
  Email,
  FoodBank,
  Lock,
  Phone,
  TextFields,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
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

export default function Profile() {
  const [userData, setUserData] = useState([]);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const result = await getProfile();
    setUserData(result);
    setUsername(result.username);
    setFullname(result.fullname);
    setEmail(result.email);
    setAddress(result.address);
    setPhone(result.phone);
    setCategory(result.category);
  };

  const deleteUser = async () => {
    await deleteProfile();
  };

  const handleSaveChanges = async () => {
    try {
      if (
        username &&
        fullname &&
        email &&
        password &&
        address &&
        phone &&
        category
      ) {
        let pwd;
        // if (newPassword && password === userData.password) {
        //   pwd = newPassword;
        // } else {
<<<<<<< HEAD
        pwd = password;
=======
          pwd = password;
>>>>>>> 3018c9ec (MVP finished. Thanks god)
        // } 
        // alert(`${newPassword}, ${password}`);
        const updatedProfile = await updateProfile({
          username: username,
          fullname: fullname,
          email: email,
          password: pwd,
          address: address,
          phone: phone,
          category: category,
        });
        localStorage.removeItem("token");
        setUserData(updatedProfile);
        // }
        navigate("/login");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Any field is invalid");
    }
  };

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  function render() {
    return (
      <Card sx={{ width: "90%", backgroundColor: blue[100] }} raised={true}>
        <CardHeader title="PROFILE"></CardHeader>

        <CardContent>
          <TextField
            type="text"
            label="username"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: <TextFields />,
            }}
          ></TextField>

          <TextField
            type="text"
            label="Full name"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.fullname}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            InputProps={{
              startAdornment: <TextFields />,
            }}
          ></TextField>

          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: <Email />,
            }}
          ></TextField>

          <TextField
            label="Old Password"
            type={isPassVisible ? "text" : "password"}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={"Old Password"}
            value={password}
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

          {/* <TextField
            label="New Password"
            type={isPassVisible ? "text" : "password"}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={"New Password"}
            // value={''}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={handleClick}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          ></TextField> */}

          <TextField
            type="text"
            label="Address"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            InputProps={{
              startAdornment: <Directions />,
            }}
          ></TextField>

          <TextField
            type="phone"
            label="Phone"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.phone /*?.toString()*/}
            value={phone /*?.toString()*/}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              startAdornment: <Phone />,
            }}
          ></TextField>

          <TextField
            type="text"
            label="Category"
            variant="outlined"
            fullWidth={true}
            margin="dense"
            placeholder={userData.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            InputProps={{
              startAdornment: <FoodBank />,
            }}
          ></TextField>
        </CardContent>

        <Divider />

        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
<<<<<<< HEAD
          {/* <Button
=======
          <Button
>>>>>>> 3018c9ec (MVP finished. Thanks god)
            onClick={() => navigate("/home")}
            size="small"
            color="secondary"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{ marginRight: "1vw" }}
          >
            BACK
<<<<<<< HEAD
          </Button> */}

=======
          </Button>

          {/* <Link to="/init"> */}
>>>>>>> 3018c9ec (MVP finished. Thanks god)
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ marginRight: "1vw" }}
            onClick={() => {
              deleteUser();
              navigate("/home");
            }}
          >
            Delete
          </Button>
<<<<<<< HEAD
=======
          {/* </Link> */}
>>>>>>> 3018c9ec (MVP finished. Thanks god)
          <Link to="/init">
            <Button
              size="small"
              onClick={handleSaveChanges}
              color="primary"
              variant="contained"
              startIcon={<EditIcon />}
            >
              EDIT
            </Button>
          </Link>
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
