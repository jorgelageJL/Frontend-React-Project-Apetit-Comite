import"./Home.css";
import Header from "../../components/Header/Header";import { styled } from '@mui/material/styles';
import {Box, Grid} from '@mui/material';


const Home = () => {
  return (
    <div>
      <Header/>
      <h1>Home</h1>

      <Grid container spacing={2}>
       <Grid item xs={6} md={8}>
          <Box bgcolor="grey" p={10}>
            This is Main Grid
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box bgcolor="grey" p={10}>
            This is sidebar box 
            <Box bgcolor="brown" p={10}>
            This is box 1 inside sidebar
            </Box>

            <Box bgcolor="white" p={10}>
            This is box 2 inside sidebar
            </Box>

            <Box bgcolor="pink" p={10} >
            This is box 3 inside sidebar
            </Box>

          </Box>
        </Grid>
        </Grid>
    </div>
  );
};

export default Home;
