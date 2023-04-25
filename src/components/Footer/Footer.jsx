import { AppBar, Box, Toolbar, Typography, } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css'
import { Mail } from "@mui/icons-material";

export default function Footer() {

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0"
      }}
    >
      <AppBar
        position="static"
        color="secondary"
        sx={{ backgroundColor: "#ffeb3b" }}
      >
        <Toolbar variant="dense">
          <Typography
            color="inherit"
            component="div"
            sx={{ width: "100%", textAlign: "center", color:"black", fontSize:"40%"}}
          >
            Follow us
            <FacebookOutlinedIcon/>
            <MailIcon/>
            <InstagramIcon/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
