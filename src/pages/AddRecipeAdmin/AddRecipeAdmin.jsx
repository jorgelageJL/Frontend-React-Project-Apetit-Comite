import React, { useEffect, useState } from 'react'
import { getRecipe } from '../../Services/recipeServices';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { getRecipeByIngredient } from '../../Services/recipeServices';
import { Button, Grid, TextField } from '@mui/material';
import { addOneRecipeAdmin } from '../../Services/menuPlannerServices';

function AddRecipeAdmin() {

    const [recipe, setRecipe] = useState([]);
    const [name, setName] = useState([])
    const [img, setImg] = useState([])
    const [description, setDescription] = useState([])
    const [instruction, setInstruction] = useState([])

      useEffect(() => {
        addRecipe()
      }, [])

      async function addRecipe() {
        const result = await addOneRecipeAdmin(name, img, description, instruction)
        // hacer algo con el resultado si es necesario
    }

    function displayRecipe() {
        return (
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card sx={{ maxWidth: "800px", padding: "10px", margin: "10px", flexDirection: "row", }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Añadir Receta
                  </Typography> 
                    <TextField
                      id="name"
                      label="Nombre de la Receta"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="img"
                      label="URL de la imagen"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="description"
                      label="Descripción de la Receta"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="instruction"
                      label="Instrucciones de la Receta"
                      value={instruction}
                      onChange={(e) => setInstruction(e.target.value)}
                      margin="normal"
                      fullWidth
                      multiline
                      rows={4}
                    />
                    <Button variant="contained" type="submit" onClick={addRecipe} sx={{backgroundColor:"black"}}>
                      Añadir
                    </Button>
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