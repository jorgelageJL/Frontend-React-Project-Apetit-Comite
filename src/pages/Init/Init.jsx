import LoginHeader from "../../components/LoginHeader/LoginHeader";
import logo from "../../assets/Full_Logo.png"
import { Box, Button, Grid } from "@mui/material";
import "./init.css";
import { Link } from "react-router-dom";


const Init = () => {

  return (
    <>
      <LoginHeader />
      <div className="fondo" style={{height:"100vh", display:"flex"}}>
        <div className="container" style={{height:"80vh", width:"98vw",  alignItems:"center",display:"flex", textAlign:"center"}}>
        <Grid container sx={{ flexDirection: { xs: 'column-reverse',  s:'column-reverse',sm: 'column-reverse', m:'row', lg:'row', xl:'row' } }}>
          <Grid  xs={12} md={12}  lg={8} sx={{fontSize: {xs: "200%", s:"300%", sm:"300%", xl:"400%"}, marginTop:{lg:"10%"}}}>
        <p className="text" style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:'TeanPearl'}}> We belive in good food planner! </p> 
        <Button variant="contained" sx={{backgroundColor:"black", marginBottom:"10%",}}>Join us now!</Button>
        </Grid>
        <Grid xs={12} md={12} lg={4} >
        <div className="logoContainer" style={{display:"flex", justifyContent:"center"}} >
         <img className="logo" src={logo} style={{width:"60vw", display:"flex",}} />
      </div>
      </Grid>
      </Grid>
      </div>
      <Grid items xs={12} md={12} lg={3} sx={{marginLeft: {lg:"62%"}, marginBottom: {lg:"10%"}, fontSize: {md:"90%", lg:"90%"}}}>
      <p className="description" style={{fontFamily:"Blinker", right:"0",  display:"flex", alignContent:"center", alignItems:"center" , fontSize:"120%", justifyContent:"flex-end",  paddingBottom:"40px", paddingRight:"40px",  paddingLeft:"50px",textAlign:"justify"}} > 
      Check out our meal prep-friendly recipes for omnivores<br/>
     vegetarians, vegans, gluten-free and dairy-free eaters.<br></br><br></br>
     Just one button to get recipes for the week can make a difference!</p>
     </Grid>
      </div>
    </>
  );
};

export default Init;