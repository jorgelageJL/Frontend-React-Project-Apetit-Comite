import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { getAllRecipes } from "../../Services/recipeServices";
import { Link, Link as RouterLink, redirect } from "react-router-dom";
// import AddRecipeMenuPlanner from '../AddRecipeMenuPlanner/AddRecipeMenuPlanner';
import AddMenuPlannerButton from "../../components/AddMenuPlannerButton/AddMenuPlannerButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BorderColor } from "@mui/icons-material";

function RecipesAdmin() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const result = await getAllRecipes();
    setRecipes(result);
  }

  function displayRecipes() {
    return recipes.map((r,idx) => {
      return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card
            key={idx}
            sx={{
              maxWidth: "345px",
              padding: "10px",
              margin: "10px",
              flexDirection: "row",
            }}
          >
            <CardActionArea component={RouterLink} to={`${r.id}`}>
              <CardMedia component="img" height="140" image={r.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {r.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  {r.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <AddMenuPlannerButton selectedRecipe={r} />
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <>
      <Link to= "/home/recipes/admin/add">
      <Button sx={{right:"10px", position: "absolute", border:"solid", borderColor:"black",}}>
        <AddCircleOutlineIcon/>
      </Button>
      </Link>
      <div style={{ width: "100%", height: "auto" }}>
        <Grid container sx={{ justifyContent: "start", flexWrap: "wrap" }}>
          {displayRecipes()}
        </Grid>
      </div>
    </>
  );
}

export default RecipesAdmin;