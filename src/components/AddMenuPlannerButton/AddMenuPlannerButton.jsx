import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Button, Tooltip } from "@mui/material";
import {
  addMenuPlanner,
  addRandomRecipe,
} from "../../Services/menuPlannerServices";

function AddMenuPlannerButton({ selectedRecipe, refreshFunction }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  async function getRandomRecipe(data) {
    const query = await addRandomRecipe(data);
    return query;
  }

  const handleAddRecipeClick = async () => {
    if (selectedRecipe === undefined) {
      const query = await getRandomRecipe(days[selectedIndex]);
      alert(`You added ${query.name} for ${days[selectedIndex]}`);
      setOpen(false);
      refreshFunction();
    } else {
      const query = addMenuPlanner(selectedRecipe.id, days[selectedIndex]);
      alert(`You added ${selectedRecipe.name} for ${days[selectedIndex]}`);
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Tooltip title="Add to Menu Planner">
          <Button onClick={handleAddRecipeClick}>+ to MenuPlanner</Button>
        </Tooltip>
        <Tooltip title="Choose a day">
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="add recipe"
            onClick={handleToggle}
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            {days[selectedIndex]}
            <ArrowDropDownIcon />
          </Button>
        </Tooltip>
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
                      key={index}
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

export default AddMenuPlannerButton;
