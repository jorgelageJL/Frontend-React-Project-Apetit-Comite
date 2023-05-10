import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { getMenuPlanner } from "../../Services/menuPlannerServices";
import { deleteRecipeMenuPlanner } from "../../Services/menuPlannerServices";
import { getRecipe } from "../../Services/recipeServices";
import Recipes from "../Recipes/Recipes";
import { getRecipeSpecial } from "../../Services/menuPlannerServices";
import { useParams } from "react-router-dom";

function MenuPlanner() {
  // const days = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  const [myMenuPlanner, setMyMenuPlanner] = useState([]);

  const {id} = useParams()

  async function handleMenuPlanner() {
    const result = await getMenuPlanner()
    console.log(result)
    setMyMenuPlanner(result);
  }


    const deleteOneRecipeMenuPlanner = async (id) => {
      console.log(id)
      await  deleteRecipeMenuPlanner(id)
    };


  useEffect(() => {
    handleMenuPlanner();
  }, [myMenuPlanner]);



  return (
    <>
      <Grid container spacing={4} padding={3} paddingBottom={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Your Meal Planner</h1>
        </div>
        {myMenuPlanner.map((recipe) => (
          <Grid
            key={recipe.id}
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: { xl: "60%", lg: "60%", sm: "60%" },
                maxWidth: "60%",
                height: "110%",
                display: "flex",
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    textAlign="center"
                    component="div"
                    width="120px"
                  >
                    {recipe.menu_planners.date}
                  </Typography>
                </Box>

                <CardMedia
                  sx={{
                    height: 130,
                    width: 140,
                    flexShrink: 0,
                    marginTop: "10px",
                    display: "flex",
                  }}
                  image={recipe.img}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    {recipe.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      maxHeight: "100px",
                      overflowY: "auto",
                      marginBottom: "5px",
                    }}
                  ></Typography>
                </CardContent>
                <CardActions sx={{ flexDirection: "column", width: "30vw" }}>
                  <Button
                    sx={{
                      color: "black",
                      display: "flex",
                      position: "flex-end",
                      textAlign: "flex-end",
                      alignContent: "flex-end",
                      justifyContent: "flex-end",
                      marginLeft: "0vw",
                    }}
                    onClick={(e) => deleteOneRecipeMenuPlanner(recipe.id)}
                  >
                    <CancelIcon />
                  </Button>
                  <Button
                    sx={{
                      marginTop: "50px",
                      color: "black",
                      display: "flex",
                      justifyContent: "flex-end",
                      marginLeft: "300px",
                    }}
                  >
                    <EditIcon />
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MenuPlanner;
