import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu as CardMenu, MenuItem, } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import YourSvg from "../../assets/HEADER_LOGO.svg"

import './Header.css'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };


  return (
    <AppBar
      position="static"
      sx={{ color: "black", backgroundColor: "#ffeb3b" }}
    >
      <Toolbar variant="dense">
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2}}
        >
          <MenuIcon/>
        </IconButton>
        <div className="iconContainer">
          <img className="icon" src={YourSvg} />
        </div>
        <CardMenu open={isMenuOpen} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem>PROFILE</MenuItem>
          <MenuItem>LOGOUT</MenuItem>
        </CardMenu>
        <Typography variant="h6" color="inherit" component="div"></Typography>
      </Toolbar>
    </AppBar>
  );
}
