import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Tooltip,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteRecipe, getAllRecipes } from "../../Services/recipeServices";
import { Link as RouterLink } from "react-router-dom";
import AddMenuPlannerButton from "../../components/AddMenuPlannerButton/AddMenuPlannerButton";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const result = await getAllRecipes();
    setRecipes(result);
  }

  const deleteOneRecipe = async (id) => {
    const query = await deleteRecipe(id);
    console.log(query);
    getRecipes();
  };

  function displayRecipes() {
    return recipes.map((r, idx) => {
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
            <Tooltip title="Delete">
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
                onClick={(e) => {
                  deleteOneRecipe(r.id);
                }}
              >
                <CancelIcon />
              </Button>
            </Tooltip>
            <CardActionArea component={RouterLink} to={`${r.id}`}>
              <Tooltip title="More details">
                <CardMedia component="img" height="140" image={r.img} />
              </Tooltip>
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
      <div style={{ width: "100%", height: "auto" }}>
        <Grid container sx={{ justifyContent: "start", flexWrap: "wrap" }}>
          {displayRecipes()}
        </Grid>
      </div>
      {/* {showPlanner && <AddRecipeMenuPlanner selectedDay={selectedDay} setShowPlanner={setShowPlanner} />} */}
    </>
  );
}

export default Recipes;
