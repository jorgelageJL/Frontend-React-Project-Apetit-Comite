import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Search.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { getOneRecipeByName } from '../../Services/recipeServices';
import { Link as RouterLink } from 'react-router-dom';

export default function Search() {
  const [text, setText] = useState('')
  const [recipe, setRecipe] = useState({})

  async function handleSearch() {
    if (text) {
      const result = await getOneRecipeByName(text)
      setRecipe(result)
    }
  }

  return (
    <>
      {/* {BUSCADOR} */}
      <Box component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          height: '10%',
          display:"flex",
          justifyContent:"center"
        }}
        noValidate
        autoComplete="on">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder='Search Recipe'
          onChange={(e) => setText(e.currentTarget.value)} sx={{ height: '10vh', lineHeight: '10vh' }} />
        <Button onClick={() => handleSearch()} sx={{ height: '10vh', lineHeight: '10vh' }}>
          Search
        </Button>
      </Box>

      {/* {CARD} */}
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card sx={{ maxWidth: "345px", padding: "10px", margin: "10px", flexDirection: "row", display:"flex",}}>
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

          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}