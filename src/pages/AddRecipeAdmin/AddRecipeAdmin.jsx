import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import { addOneRecipeAdmin } from "../../Services/menuPlannerServices";

function AddRecipeAdmin() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");

  async function addRecipe() {
    const result = await addOneRecipeAdmin(name, img, description, instruction);
    alert("New recipe added");
    reset();
  }

  const reset = () => {
    setName("");
    setImg("");
    setDescription("");
    setInstruction("");
  };

  function displayRecipe() {
    return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card
          sx={{
            maxWidth: "800px",
            padding: "10px",
            margin: "10px",
            flexDirection: "row",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Add Recipe
            </Typography>
            <TextField
              id="name"
              label="Recipe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="img"
              label="Image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="instruction"
              label="Instruction"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              margin="normal"
              fullWidth
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={addRecipe}
              sx={{ backgroundColor: "black" }}
            >
              ADD
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  return <>{displayRecipe()}</>;
}

export default AddRecipeAdmin;
