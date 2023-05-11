import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Search.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { getAllRecipesByName } from '../../Services/recipeServices';
import { Link as RouterLink } from 'react-router-dom';
import './Search.css'

export default function Search() {
  const [text, setText] = useState('')
  const [recipes, setRecipes] = useState([])

  async function handleSearch() {
    if (text) {
      const results = await getAllRecipesByName(text)
      setRecipes(results)
    } 
  } 

  return (
    <>
      {/* {BUSCADOR} */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          height: "10%",
        }}
        noValidate
        autoComplete="on"
        display="flex"
        justifyContent="center"
      >
        <TextField
          id="outlined-basic"
          label="Search recipe"
          placeholder='Search recipe'
          variant="outlined"
          onChange={(e) => setText(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
          sx={{ height: "10vh", lineHeight: "10vh" }}
        />
        <Button
          onClick={() => handleSearch()}
          variant="contained"
          sx={{
            backgroundColor: "black",
            left: "50px",
            color: "white",
            display: "flex",
            top: "10px",
            height:"5vh"
          }}
        >
          Search
        </Button>
       
      </Box>

      {/* {CARDS} */}
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid
            key={recipe.id}
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            alignContent="center"
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                maxWidth: "345px",
                padding: "10px",
                margin: "10px",
                flexDirection: "row",
                minWidth: "345px",
              }}
            >
              <CardActionArea component={RouterLink} to={`${recipe.id}`}>
                <CardMedia component="img" height="140" image={recipe.img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {recipe.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}