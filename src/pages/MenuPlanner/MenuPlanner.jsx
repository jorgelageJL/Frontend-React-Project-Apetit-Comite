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
import { getRecipe } from "../../Services/recipeServices";
import Recipes from "../Recipes/Recipes";
import { getRecipeSpecial } from "../../Services/menuPlannerServices";

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
  //const [recipes, setRecipes] = useState([]);
  const [recipeMenuPlanner, setRecipeMenuPlanner] = useState([]);

  // async function handleRecipesMenuPlanner() {
  //   const result = await getMenuPlanner();
  //   setUserRecipe(result);
  //   console.log(result);
  // }

  async function getMyRecipe() {
    const menuPlannerRecipe = [];
    menuPlannerRecipe.push(
      myMenuPlanner.map(async (mp) => {
        const recipe = await getRecipe(mp.recipeId);
        //console.log(recipe)
        return {
          date: mp.date,
          name: recipe.name,
          img: recipe.img,
        };
      })
    );
    setRecipeMenuPlanner(menuPlannerRecipe);
    //console.log(menuPlannerRecipe);
  }

  // function recipeByDay () {
  //   const recipesMenuPlanner = [{
  //     Monday: {
  //       img: "",
  //       text:""
  //     },
  //   }
  //   ]
  // }

  useEffect(() => {
    async function handleMenuPlanner() {
      const result = await getMenuPlanner();
      //console.log(result.recipes)
      // const data = result.map((r) => {
      //   return r.menu_planners;
      // });

      setMyMenuPlanner(result);
      //console.log(result)
    }

    handleMenuPlanner();
    //getMyRecipe();
    //console.log(recipeMenuPlanner);
    //handleRecipesMenuPlanner();
    console.log(myMenuPlanner);
    //console.log(recipes)
    //handleRecipes();
    //console.log(getRecipes);
  }, []);
  // console.log(getRecipes);

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
        {/*recipeMenuPlanner.map((day) => (
          <Grid
            key={day}
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
                    {day}
                  </Typography>
                </Box>
                {/* {myMenuPlanner.map((m) => {
                  console.log(typeof m.date);
                  if (m.date === day) {
                    const oneRecipe = getMyRecipe(m.recipeId);
                    {
                      console.log(oneRecipe);
                    }
                    return (
                      <CardMedia
                        sx={{
                          height: 130,
                          width: 140,
                          flexShrink: 0,
                          marginTop: "10px",
                          display: "flex",
                        }}
                        image={oneRecipe.img}
                      />
                    );
                  } else {
                    return (
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://i0.wp.com/riadenoia.es/wp-content/uploads/2022/09/Lagarto-ocelado-arnal-timon-lepidus-malformacion-en-la-cola-ria-de-noia-cabecera.jpg?fit=640%2C360&ssl=1"
                      />
                    );
                  }
                })} /}
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
                    RECIPE NAME
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
                  ))*/}
      </Grid>
    </>
  );
}
export default MenuPlanner;
