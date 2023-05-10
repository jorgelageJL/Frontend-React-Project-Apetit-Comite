import React, { useEffect, useState } from 'react'
import { getRecipe } from '../../Services/recipeServices';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { getRecipeByIngredient } from '../../Services/recipeServices';
import { Grid } from '@mui/material';
function AddRecipeAdmin() {


    function displayRecipe() {

            return (
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <Card sx={{ maxWidth: "800px", padding: "10px", margin: "10px", flexDirection: "row", }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">

                        </Typography> 
                    <Typography variant="body2" sx={{ color: "black" }}>
                    <b>Inserte nombre de receta:</b>
                    <br></br><br></br>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    <b>Inserte URL de imagen:</b>
                    <br></br><br></br>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    <b>Inserte descripcion de la receta:</b>
                    <br></br><br></br>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    <b>Inserte instrucciones de la receta:</b>
                    <br></br><br></br>
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


export default AddRecipeAdmin