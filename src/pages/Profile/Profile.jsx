import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import { getProfile } from '../../Services/userServices';


export default function Profile() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async() => {
    const result = await getProfile();
    console.log(result)
    setUserData(result)

}
  return (
   
    <Grid  item xs={12} sm={12} md={12} sx={{display:"flex", justifyContent:"center",}}>
    <Card sx={{ width:{xl:"60%", lg:"60%", sm:"60%"}, maxWidth:"60%",height:"110%", display:"flex"}}>
      <Box sx={{ display: 'flex',height: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.primary">
           <b>USERNAME:</b>  {userData.username}
           <br></br> <br></br>
          </Typography>
          <Typography variant="body2" color="text.primary">
           <b>FULLNAME:</b>  {userData.fullname}
           <br></br> <br></br>
          </Typography>
          <Typography variant="body2" color="text.primary">
           <b>EMAIL:</b> {userData.email}
           <br></br> <br></br> 
          </Typography>
          <Typography variant="body2" color="text.primary">

          </Typography>
          <Typography variant="body2" color="text.primary">
           <b>ADDRESS:</b> {userData.address}
           <br></br> <br></br>
          </Typography>
          <Typography variant="body2" color="text.primary">
           <b>PHONE:</b> {userData.phone}
           <br></br> <br></br>
          </Typography>
          <Typography variant="body2" color="text.primary">
           <b>CATEGORY:</b> {userData.category}
           <br></br> <br></br>
          </Typography>
     
        </CardContent>
        <CardActions  sx={{ flexDirection: 'column', width:"30vw" }}>

          <Button  sx={{ marginTop: '50px', color:"black", display:"flex", justifyContent:"flex-end", marginLeft:"300px" }}>
            <EditIcon/>
            </Button>
        </CardActions>
      </Box>
    </Card>
  </Grid>
   
)}


