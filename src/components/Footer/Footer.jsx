import { AppBar, Box, Toolbar, Typography, } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css'
import IconButton from "@mui/material/IconButton";



export default function Footer() {

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
      }}
    >
      <AppBar
        position="static"
        color="secondary"
        sx={{ backgroundColor: "#ffeb3b" }}
      >
        <Toolbar variant="dense">
          <Typography
            component="div"
            sx={{
              width: "120%",
              textAlign: "center",
              color: "black",
              fontSize: "70%",
            }}
          >
        
              <div>Follow us</div>
              <IconButton>
                <a href="https://www.facebook.com/">
                  <FacebookOutlinedIcon sx={{ color: "black" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.instagram.com/">
                  <InstagramIcon sx={{ color: "black" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-485496909%3A1682602112311248&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AQMjQ7TnLMkMK99B2bfdWA4dtHf3Jdy0ySCIyGj3khL4Y6KuEg7mqKQ6_0mDEUnIvsx23EGUOJUTlw&osid=1&passive=1209600&service=mail">
                  <MailIcon sx={{ color: "black" }} />
                </a>
              </IconButton>
            <div>
              2023 © Appetit Comite-SCE01 - Final Projext | EU Privacy Policy
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
