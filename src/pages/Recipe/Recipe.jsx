import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../Services/recipeServices';

function Recipe() {

    const [recipe, setRecipe] = useState([])

    const {id} = useParams()

    useEffect(() => {
      getOneRecipe();
    }, []);

    const getOneRecipe = async() => {
        const result = await getRecipe(id);
        setRecipe(result)
        console.log(result)
    }

    function displayRecipe() {
        return recipe.map(r => {
            return (
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <Card sx={{ maxWidth: "345px", padding: "10px", margin: "10px", flexDirection: "row", }}>
        
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={r.img}
                      />
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
                      <Button variant="contained" sx={{ backgroundColor: "black", left: "50px" }}>
                        + Add To Planner
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
    }


  return (
    <>
        {displayRecipe()}
    </>
  )
}

export default Recipe