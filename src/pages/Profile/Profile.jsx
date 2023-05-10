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
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("")
  const [category, setCategory] = useState("");  


  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async() => {
    const result = await getProfile();
    setUserData(result)

}

  const deleteUser = async () => {
    await deleteProfile();

  }

  const handleSaveChanges = async () => {
    const updatedProfile = await updateProfile({
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      address: address,
      phone: phone,
      category: category
    });
    setUserData(updatedProfile)
    setProfileData(updatedProfile)
    console.log(userData)
  };


  const [isPassVisible, setIsPassVisible] = useState(false);


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
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <TextFields />,
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>

          <TextField
            type="text"
            label="Full name"
            variant="outlined"
            placeholder={fullname}
            fullWidth={true}
            margin="dense"
            InputProps={{
              startAdornment: <TextFields />,
            }}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></TextField>

          <TextField
            type="email"
            label="Email"
            variant="outlined"
            placeholder={userData.email}
            fullWidth={true}
            margin="dense"
            value={email}
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

          <TextField
            type="text"
            label="Address"
            variant="outlined"
            placeholder={userData.address}
            fullWidth={true}
            margin="dense"
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
            placeholder={userData.phone?.toString()}
            fullWidth={true}
            margin="dense"
            value={phone?.toString()}
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
            fullWidth={true}
            margin="dense"
            value={category}
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
        <Link to="/init">
          <Button
            size="small" onClick={handleSaveChanges} color="primary" variant="contained" startIcon={<EditIcon/>}>
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



