import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { getAllRecipes } from "../../Services/recipeServices";
import { Link, Link as RouterLink, redirect } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from "@mui/icons-material/Cancel";

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
        <Grid item xs={12} sm={6} md={4} xl={3} key={r.id}>
          <Card
            key={idx}
            sx={{
              maxWidth: "345px",
              padding: "10px",
              margin: "10px",
              flexDirection: "row",
            }}
          >
            <CardActionArea component={RouterLink} to={`/home/recipes/${r.id}`}>
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
            <CardActions sx={{justifyContent: "space-between"}}>
              <Link to={`${r.id}`}>
              <Button>
                <EditIcon sx={{color:"black"}}/>
              </Button>
              </Link>
              <Button>
                <CancelIcon sx={{color:"black"}}/>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <>
      <Link to= "/home/recipes/admin/add">
      <Button sx={{right:"10px", position: "absolute", border:"solid", borderColor:"black", borderRadius:"100px", }}>
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
