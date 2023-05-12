import React, { useEffect, useState } from 'react'
import { updateRecipe } from '../../Services/recipeServices'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../../Services/recipeServices'
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'

function EditRecipe() {

    const [recipeData, setRecipeData] = useState([])
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [instruction, setInstruction] = useState("")

const {id} = useParams()

    async function editRecipe() {
        await updateRecipe(id, name, img, description, instruction)
    }

    async function getOneRecipe() {
        const result = await getRecipe(id)
        setName(result.name);
        setImg(result.img);
        setDescription(result.description);
        setInstruction(result.instruction);
        setRecipeData(result)

    }

    useEffect(() => {
        getOneRecipe()
    }, [])

    function displayRecipe() {
        return (
            <Grid
        item
        xs={12}
        sm={6}
        md={4}
        xl={3}
      >
        <Card
          sx={{
            maxWidth: "800px",
            padding: "10px",
            margin: "10px",
            flexDirection: "row",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
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
            <CardActions sx={{display:"flex", justifyContent:"center"}}>
            <Button
              variant="contained"
              type="submit"
              onClick={editRecipe}
              sx={{ backgroundColor: "black"}}
            >
              Editar
            </Button>
            </CardActions>
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

export default EditRecipe