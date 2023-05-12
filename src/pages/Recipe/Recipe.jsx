import { useEffect, useState } from 'react'
import { getRecipe } from '../../Services/recipeServices';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getRecipeByIngredient } from '../../Services/recipeServices';

function Recipe() {
  const [recipe, setRecipe] = useState([])
  const [ingredientRecipe, setIngredientRecipe] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getOneRecipe();
    getIngredientByRecipe()
  }, []);

  const getOneRecipe = async () => {
    const result = await getRecipe(id);
    setRecipe(result)
  }

  const getIngredientByRecipe = async () => {
    const result = await getRecipeByIngredient(id)
    setIngredientRecipe(result)
  }

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card sx={{ maxWidth: "345px", padding: "10px", margin: "10px", flexDirection: "row", }}>
        <CardMedia
          component="img"
          height="140"
          image={recipe.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">

            {recipe.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            <br></br>
            <b>Description: </b>
            {recipe.description}
            <br></br> <br></br>
            <b>Ingredients: </b>{ingredientRecipe.map(i => {
              return (
                i.recipe_ingredient.quantity + i.recipe_ingredient.unit + ' de ' + i.name + ' '
              )
            })}
            <br></br><br></br>
            <b>Instructions: </b> {recipe.instruction}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Recipe
