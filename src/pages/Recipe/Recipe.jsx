import React, { useEffect, useState } from 'react'

import { getRecipe } from '../../Services/recipeServices';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

function Recipe() {

    const [recipe, setRecipe] = useState([])

    const {id} = useParams()

    useEffect(() => {
      getOneRecipe();
    }, []);

    const getOneRecipe = async() => {
        const result = await getRecipe(id);
        console.log(await getRecipe(id))
        setRecipe(result)

    }

    function displayRecipe() {

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
                          {recipe.description}
                          <br></br> <br></br>
                         <b>Ingredientes:</b>{recipe.ingredient}
                          <br></br><br></br>
                          <b>Instrucciones:</b> {recipe.instruction}
                        </Typography>
                      </CardContent>
                  </Card>
                </Grid>
                
              )

    }


  return (
    <>
        {displayRecipe()}
    </>
  )
}

export default Recipe