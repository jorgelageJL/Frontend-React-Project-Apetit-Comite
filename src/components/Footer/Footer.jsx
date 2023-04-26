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
              fontSize: "40%",
            }}
          >
            <div>Follow us</div>
            <FacebookOutlinedIcon />
            <MailIcon />
            <InstagramIcon />
            <p>2023 © Appetit Comite-SCE01 - Final Projext | EU Privacy Policy</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
