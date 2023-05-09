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
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { getMenuPlanner } from '../../Services/menuPlannerServices';
import { getRecipe } from '../../Services/recipeServices';

function MenuPlanner() {

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  function SplitButton() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [MyMenuPlanner, setMyMenuPlanner] = useState([]);
    const [getRecipes, setRecipes] = useState([]);

    const handleClick = () => {
      alert(days[selectedIndex]);
      console.info(`You clicked ${days[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    async function handleMenuPlanner() {
      const result = await getMenuPlanner();
      setMyMenuPlanner(result);
    }

    async function handleRecipes() {
      const result = [];
      await result.push(
        MyMenuPlanner.map((r) => {
          getRecipe(r.recipeId);
        })
      );
      setRecipes(result);
    }

    useEffect(() => {
      handleMenuPlanner();
      handleRecipes();
      console.log(getRecipes);
    }, []);
    // console.log(getRecipes);

    return (
      <React.Fragment>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>Add random recipe!</Button>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
            {days[selectedIndex]}
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {days.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    );
  }

  function displayMenuPlanner() {

    {
      return days.map((day) => (

        <Grid key={day} item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "center", }}>
          <Card sx={{ width: { xl: "60%", lg: "60%", sm: "60%" }, maxWidth: "60%", height: "110%", display: "flex" }}>
            <Box sx={{ display: 'flex', height: '100%' }}>
              <Box sx={{ flexGrow: 1 }}>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: "center", marginTop: "50px", padding: "10px" }}>
                <Typography variant="h5" textAlign="center" component="div" width="120px">
                  {day}
                </Typography>
              </Box>
              <CardMedia
                sx={{ height: 130, width: 140, flexShrink: 0, marginTop: "10px", display: "flex" }}
                // { MyMenuPlanner.map()}
                image="https://upload.wikimedia.org/wikipedia/commons/9/96/Lagarto_ocelado_Sierra_Sur_Ja%C3%A9n_2019_24J_01.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px" }}>
                  RECIPE NAME
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "100px", overflowY: "auto", marginBottom: "5px" }}>
                </Typography>
              </CardContent>
              <CardActions sx={{ flexDirection: 'column', width: "30vw" }}>
                <Button sx={{ color: "black", display: "flex", position: "flex-end", textAlign: "flex-end", alignContent: "flex-end", justifyContent: "flex-end", marginLeft: "0vw" }}>
                  <CancelIcon />
                </Button>
                <Button sx={{ marginTop: '50px', color: "black", display: "flex", justifyContent: "flex-end", marginLeft: "300px" }}>
                  <EditIcon />
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>

      ))
    }
  }


  return (
    <>
      <Grid container spacing={4} padding={3} paddingBottom={5}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
          <h1>Your 7-Day Meal Planner</h1>
        </div>
        {displayMenuPlanner()}
        {SplitButton()}
      </Grid>
    </>
  );
}
export default MenuPlanner