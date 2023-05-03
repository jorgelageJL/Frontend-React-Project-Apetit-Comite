import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Header from '../../components/Header/Header'


const recetas = [
  {
    nombre: "Ensalada César",
    descripcion: "Una ensalada clásica con pollo, lechuga romana, parmesano y aderezo César",
    imagen: "https://example.com/ensalada-cesar.jpg"
  },
  {
    nombre: "Pollo al Curry",
    descripcion: "Un platillo hindú con pollo, arroz y especias",
    imagen: "https://example.com/pollo-al-curry.jpg"
  },
  {
    nombre: "Sopa de Tomate",
    descripcion: "Una sopa caliente y reconfortante con tomates frescos y hierbas",
    imagen: "https://example.com/sopa-de-tomate.jpg"
  },
  {
    nombre: "Pizza Margarita",
    descripcion: "Una pizza clásica con salsa de tomate, mozzarella y albahaca fresca",
    imagen: "https://example.com/pizza-margarita.jpg"
  },
  {
    nombre: "Tacos de Pollo",
    descripcion: "Tacos mexicanos con pollo, cebolla, cilantro y limón",
    imagen: "https://example.com/tacos-de-pollo.jpg"
  },
  {
    nombre: "Pasta Alfredo",
    descripcion: "Una pasta cremosa con salsa Alfredo y pollo",
    imagen: "https://example.com/pasta-alfredo.jpg"
  },
  {
    nombre: "Hamburguesa con Queso",
    descripcion: "Una hamburguesa clásica con queso cheddar, lechuga, tomate y salsa especial",
    imagen: "https://example.com/hamburguesa-con-queso.jpg"
  },
  {
    nombre: "Sushi",
    descripcion: "Rollitos de arroz y pescado fresco",
    imagen: "https://example.com/sushi.jpg"
  },
  {
    nombre: "Enchiladas",
    descripcion: "Tortillas de maíz rellenas de pollo o carne, bañadas en salsa de chile",
    imagen: "https://example.com/enchiladas.jpg"
  },
  {
    nombre: "Lasaña",
    descripcion: "Un platillo italiano con capas de pasta, carne molida y queso",
    imagen: "https://example.com/lasagna.jpg"
  },
  {
    nombre: "Gazpacho",
    descripcion: "Una sopa fría con tomate, pepino y pimiento",
    imagen: "https://example.com/gazpacho.jpg"
  },
  {
    nombre: "Salmón a la Parrilla",
    descripcion: "Salmón fresco marinado y asado a la parrilla",
    imagen: "https://example.com/salmon-a-la-parrilla.jpg"
  },
  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },
  {
    nombre: "Arroz con Pollo",
    descripcion: "Un platillo latino con arroz, pollo y verduras",
    imagen: "https://example.com/arroz-con-pollo.jpg"
  },
  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },
  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos fritos sobre una tortilla de maíz con salsa de tomate y frijoles",
    imagen: "https://example.com/huevos-rancheros.jpg"
  },
]


function Recipes() {

  function displayRecipes () {
    return recetas.map(r => {
      return (
        <Grid item xs={12} sm={6} md ={4} xl={3}>
          <Card sx={{ maxWidth: "345px", padding: "10px", margin: "10px", flexDirection: "row", }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={r.imagen}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {r.nombre}
                </Typography>
                <Typography variant="body2" sx={{color:"black"}}>
                  {r.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" sx={{backgroundColor:"black", left:"50px"}}>
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
      {/* <div  style={{width:"100%", height:"auto"}}>
        <Header/>
        <Grid container sx={{  justifyContent: "start", flexWrap: "wrap" }}>
          {displayRecipes()}
        </Grid>
      </div> */}
      
    </>

  )
}

export default Recipes