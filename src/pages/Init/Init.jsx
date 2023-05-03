import LoginHeader from "../../components/LoginHeader/LoginHeader";
import logo from "../../assets/Full_Logo.png"
import { Box, Button, Grid } from "@mui/material";
import "./init.css";
import { Link } from "react-router-dom";


const Init = () => {

  return (
    <>
      <LoginHeader />
      <div className="fondo" style={{height:"112vh", display:"flex"}}>
        <div className="container" style={{height:"80vh",
         width:"98vw", 
          alignItems:"center",
          display:"flex", 
          textAlign:"center"
          }}>

        <Grid container sx={{
           flexDirection: {
              xs: 'column-reverse',  
              s:'column-reverse',sm: 'column-reverse',
              m:'row', 
              lg:'row', 
              xl:'row' }, 
            marginTop:{
              lg:"10"
            } 
            }}>
          <Grid  xs={12} md={12} lg={8} 
          sx={{fontSize: {
            xs: "150%", 
            s:"250%", 
            sm:"250%", 
            md:"270%", 
            xl:"260%"
            },
          marginTop:{
            lg:"40%",
            md:"20%"
          }, 
          marginBottom:{
            md:"20%"
          }, 
          paddingBottom:{
            s:"40px",
            md:"40px"
         },
        }}>
      <div className="text-and-button">
      <p className="text" sx = {{fontSize:{xl:""}}}style={{ 
        width:"100%", 
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontFamily:'TeanPearl'
        }}> 
        We belive in good food planner! 
        </p> 
      <Button className="button" variant="contained" sx={{
        backgroundColor:"black",
        marginBottom:"10%"
      }}>
        Join us now!
        </Button>
    </div>
        </Grid>
        <Grid xs={12} md={12} lg={4} sx={{marginTop:{md:"10%", lg:"30%"} }} >
        <div className="logoContainer" style={{display:"flex", justifyContent:"center"}} >
         <img className="logo" src={logo} style={{
            position:"relative",
            width:"auto", 
            display:"flex"}} />
        </div>
        </Grid>
        </Grid>
      </div>
      <Grid items xs={12} md={12} lg={3} sx={{
        marginLeft: {lg:"62%"}, 
        marginBottom:{lg:"50px"}, 
        fontSize: {xs:"120%",s:"120%", md:"160%", lg:"160%"},
        }}>
      <p className="description" style={{
        fontFamily:"Blinker",
         right:"0",  
         display:"flex",
          alignContent:"center", 
          alignItems:"center" , 
          fontSize:"120%", 
          justifyContent:"flex-end",  
          paddingBottom:"40px", 
          paddingRight:"40px",  
          paddingLeft:"50px",
          textAlign:"justify"}} > 
          
      Check out our meal prep-friendly recipes for omnivores<br/>
     vegetarians, vegans, gluten-free and dairy-free eaters.<br></br><br></br>
     Just one button to get recipes for the week can make a difference!</p>
     </Grid>
      </div>
    </>
  );
};

export default Init;