import React, { useEffect, useState } from 'react'

import { getProfile } from '../../Services/userServices';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProfile } from '../../Services/userServices';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { updateProfile } from '../../Services/userServices';


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



export default function Profile() {

  const [userData, setUserData] = useState([])
  const [profileData, setProfileData] = useState([])  



  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async() => {
    const result = await getProfile();
    console.log(result)
    setUserData(result)

}

  const deleteUser = async () => {
    await deleteProfile();

  }
  
  const profile = async () => {
    const result = await updateProfile(profileData)
    console.log(result)
   setProfileData(result)
  }

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [role/*, setRole*/] = useState("user");

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
            placeholder={userData.username}
            value={profileData.username}
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
            placeholder={userData.fullname}
            value={userData.fullname}
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
            placeholder={userData.email}
            value={profileData.email}
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
            placeholder={userData.address}
            value={userData.address}
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
            placeholder={userData.phone}
            value={userData.phone}
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
            placeholder={userData.category}
            value={userData.category}
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
            <Link to='/home'> 
        <Button
            onClick={() => goToRegister()}
            size="small"
            color="secondary"
            variant="contained"
            startIcon={<ArrowBackIcon/>}
            sx={{ marginRight: "1vw" }}>
            BACK
          </Button>
          </Link>

          <Link to ="/init">
          <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon/>}
        sx={{ marginRight: "1vw" }}
        onClick={deleteUser}
      >
        Delete
      </Button>
      </Link>

          <Button
            size="small" color="primary" variant="contained" onClick={profile} startIcon={<EditIcon/>}>
            EDIT
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



